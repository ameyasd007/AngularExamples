import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesMasterComponent } from './HeroesModule/heroes-master/heroes-master.component';
import { HeroesComponent } from './HeroesModule/heroes/heroes.component';
import { HeroDetailComponent } from './HeroesModule/hero-detail/hero-detail.component';
import { MessagesComponent } from './HeroesModule/messages/messages.component';
import { LoginComponent } from './Project/login/login.component';
import { ProductComponent } from './Project/product/product.component';
import { ProductsDashboardComponent } from './Project/products-dashboard/products-dashboard.component';
import { ProductRowComponent } from './Project/product-row/product-row.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroesMasterComponent,
    HeroDetailComponent,
    MessagesComponent,
    LoginComponent,
    ProductComponent,
    ProductsDashboardComponent,
    ProductRowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
