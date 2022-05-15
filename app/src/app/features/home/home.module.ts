import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeSliderComponent } from './components/home-slider/home-slider.component';
import { NgImageSliderModule } from 'ng-image-slider';

@NgModule({
  declarations: [
    HomeComponent,
    HomeSliderComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgImageSliderModule
  ]
})
export class HomeModule { }
