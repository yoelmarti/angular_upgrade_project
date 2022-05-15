import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddPilotRoutingModule } from './add-pilot-routing.module';
import { AddPilotComponent } from './add-pilot.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddPilotComponent
  ],
  imports: [
    CommonModule,
    AddPilotRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AddPilotModule { }
