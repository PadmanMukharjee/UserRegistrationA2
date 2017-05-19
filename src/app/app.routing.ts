import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';



const appRoutes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },   
    { path: 'login', redirectTo: 'login', pathMatch: 'full' },
    { path :'register',redirectTo:'register',pathMatch:'full'},
    { path:'welcome',redirectTo:'welcome',pathMatch:'full'}  
];


@NgModule({  
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}