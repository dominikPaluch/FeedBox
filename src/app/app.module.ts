import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {OpinionComponent} from './components/opinion/opinion.component';
import {HeadersliderComponent} from './components/headerslider/headerslider.component';

import {CarouselModule, TooltipModule} from 'primeng/primeng';
import {Ng2PageScrollModule} from 'ng2-page-scroll';
import {Ng2ScrollimateModule} from 'ng2-scrollimate';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OpinionComponent,
    HeadersliderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CarouselModule,
    TooltipModule,
    Ng2PageScrollModule,
    Ng2ScrollimateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
