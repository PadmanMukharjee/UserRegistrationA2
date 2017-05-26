import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

loginSuccess :boolean =false;

ngOnInit(){
 
}

  canActivate() {
    if(this.loginSuccess)
    return true;
  }

  canActivateChild() {
    console.log('checking child route access');
    return true;
  }

}