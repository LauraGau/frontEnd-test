import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { ButtonComponent } from './components/button/button.component';
import { DiscComponent } from './components/disc/disc.component';
import {HttpClientModule} from '@angular/common/http';
import { NextPageBtnComponent } from './components/button/next-page-btn/next-page-btn.component';
import { PrevPageBtnComponent } from './components/button/prev-page-btn/prev-page-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ButtonComponent,
    DiscComponent,
    NextPageBtnComponent,
    PrevPageBtnComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
