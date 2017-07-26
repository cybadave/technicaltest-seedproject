import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SiteNav } from "app/siteNav/siteNav";
import { BurgerMenu } from "app/burgerMenu/burgerMenu";


@NgModule({
  declarations: [
    AppComponent,
    SiteNav,
    BurgerMenu
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
