import { NgModule } from '@angular/core';
import { CanActivate, Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Project/login/login.component';
import { HeroesMasterComponent } from './HeroesModule/heroes-master/heroes-master.component';
import { ProductComponent } from './Project/product/product.component';
import { ProductsDashboardComponent } from './Project/products-dashboard/products-dashboard.component';

class CustomCanActivate implements CanActivate {
  canActivate(): boolean {
    console.log(Boolean(localStorage.getItem('isLoggedIn')));
    console.log(localStorage.getItem('isLoggedIn'));
    console.log(null);

    return localStorage.getItem('isLoggedIn') === 'true';
    // return Boolean(undefined);
  }
}

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'heroes', component: HeroesMasterComponent },
  {
    path: 'products',
    component: ProductsDashboardComponent,
    canActivate: [CustomCanActivate]
  },
  { path: 'createproduct', component: ProductComponent },
  { path: 'createproduct/:id', component: ProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CustomCanActivate]
})
export class AppRoutingModule {}
