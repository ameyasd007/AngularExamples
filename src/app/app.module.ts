import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeroesMasterComponent} from './HeroesModule/heroes-master/heroes-master.component';
import {HeroesComponent} from './HeroesModule/heroes/heroes.component';
import { HeroDetailComponent } from './HeroesModule/hero-detail/hero-detail.component';
import { MessagesComponent } from './HeroesModule/messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroesMasterComponent,
    HeroDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
