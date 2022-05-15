import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: `user-profile/:id`, loadChildren: () =>
      import('./features/profile/profile.module').then(m => m.ProfileModule),
      canActivate: [AuthGuard] //Con esto protegemos esta ruta
  },
  {
    path: `sign-up`, loadChildren: () =>
      import('./features/signup/signup.module').then(m => m.SignupModule)
  },
  {
    path: `sign-in`, loadChildren: () =>
      import('./features/signin/signin.module').then(m => m.SigninModule)
  },
  {
    path: `dakar-pilots`, loadChildren: () =>
      import('./features/dakar/components/dakar-pilots/dakar-pilots.module').then(m => m.DakarPilotsModule),
      canActivate: [AuthGuard]
  },
  {
    path: `dakar-pilots/:pilotId`, loadChildren: () =>
      import('./features/dakar/components/pilot-detail/pilot-detail.module').then(m => m.PilotDetailModule),
      canActivate: [AuthGuard]
  },{
    path: `new-pilot`, loadChildren: () =>
      import('./features/dakar/components/add-pilot/add-pilot.module').then(m => m.AddPilotModule),
      canActivate: [AuthGuard]
  },
  {
    path: '', loadChildren: ()=>
    import('./features/home/home.module').then(m=>m.HomeModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
