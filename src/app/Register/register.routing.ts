import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent }       from './register.component';
import {RegisterSuccessComponent} from './regSuceess.component';

const regRoutes: Routes = [
   { path: 'register',
    children:[{path:'',component: RegisterComponent},
    {path:'regSuccess',component: RegisterSuccessComponent}
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

export class RegisterRoutingModule { }