import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { OpinionComponent } from './components/opinion/opinion.component';
import { HeadersliderComponent } from './components/headerslider/headerslider.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OpinionComponent,
    HeadersliderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
