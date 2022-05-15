import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PilotDetailRoutingModule } from './pilot-detail-routing.module';
import { PilotDetailComponent } from './pilot-detail.component';


@NgModule({
  declarations: [
    PilotDetailComponent
  ],
  imports: [
    CommonModule,
    PilotDetailRoutingModule
  ]
})
export class PilotDetailModule { }
