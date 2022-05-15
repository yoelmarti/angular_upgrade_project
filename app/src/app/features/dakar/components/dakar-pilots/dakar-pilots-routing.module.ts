import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DakarPilotsComponent } from './dakar-pilots.component';

const routes: Routes = [
  {
    path: '', 
    component: DakarPilotsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DakarPilotsRoutingModule { }
