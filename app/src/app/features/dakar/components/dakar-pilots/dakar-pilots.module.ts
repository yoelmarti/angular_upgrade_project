import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DakarPilotsRoutingModule } from './dakar-pilots-routing.module';
import { DakarPilotsComponent } from './dakar-pilots.component';


@NgModule({
  declarations: [
    DakarPilotsComponent
  ],
  imports: [
    CommonModule,
    DakarPilotsRoutingModule
  ]
})
export class DakarPilotsModule { }
