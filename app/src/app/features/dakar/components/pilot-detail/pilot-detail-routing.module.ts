import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PilotDetailComponent } from './pilot-detail.component';

const routes: Routes = [
  {
    path: '', 
    component: PilotDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PilotDetailRoutingModule { }
