import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent }       from './welcome.component';
import { AuthGuard } from '../Services/welcomeGuard.service';

const regRoutes: Routes = [
   { path: 'welcome',
    children:[
      {path:'',
        canActivate: [AuthGuard],
        component:WelcomeComponent 
      },
    ]
   } 
];

@NgModule({
  imports: [
    RouterModule.forChild(regRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class WelcomeRoutingModule { }