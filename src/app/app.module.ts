import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {OpinionComponent} from './components/opinion/opinion.component';

import {CarouselModule, TooltipModule} from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OpinionComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CarouselModule,
    TooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
