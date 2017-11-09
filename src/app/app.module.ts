import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { OpinionComponent } from './components/opinion/opinion.component';
import { HeadersliderComponent } from './components/headerslider/headerslider.component';

import { CarouselModule, TooltipModule } from 'primeng/primeng';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { Ng2ScrollimateModule } from 'ng2-scrollimate';
import { ContactComponent } from './components/contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { BannerComponent } from './components/banner/banner.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { MapComponent } from './components/map/map.component';
import { AgmCoreModule } from '@agm/core';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsComponent } from './components/products/products.component';

export const ROUTES: Routes = [
  {
    path: 'kontakt',
    component: ContactComponent,
    data: {
      title: 'FoodBox - Kontakt'
    }
  }, {
    path: 'produkty',
    component: ProductsComponent,
    data: {
      title: 'FoodBox - Produkty'
    }
  }, {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OpinionComponent,
    HeadersliderComponent,
    ContactComponent,
    MenuComponent,
    BannerComponent,
    ProductListComponent,
    MapComponent,
    FooterComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CarouselModule,
    TooltipModule,
    Ng2PageScrollModule,
    Ng2ScrollimateModule,
    RouterModule.forRoot(ROUTES),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDLHDTuibT_U4P15XvfzQ32Xys0tY3KLn8'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
