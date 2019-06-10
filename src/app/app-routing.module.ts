import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Project/login/login.component';
import { HeroesMasterComponent } from './HeroesModule/heroes-master/heroes-master.component';
import { ProductComponent } from './Project/product/product.component';
import { ProductsDashboardComponent } from './Project/products-dashboard/products-dashboard.component';

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"heroes", component:HeroesMasterComponent},
  {path:"products", component:ProductsDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
