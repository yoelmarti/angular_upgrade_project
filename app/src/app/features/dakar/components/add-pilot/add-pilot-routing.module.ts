import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPilotComponent } from './add-pilot.component';

const routes: Routes = [
  {
    path:'',
    component: AddPilotComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddPilotRoutingModule { }
