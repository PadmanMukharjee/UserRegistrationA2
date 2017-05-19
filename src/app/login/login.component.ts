import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {routerlink} from '@angular/router';
import { AuthGuard } from '../Services/welcomeGuard.service';

@Component({
  moduleId:module.id,   
    templateUrl:'./login.html',
})
export class LoginComponent{
username : string="abc";
password :string="klmbgklf";

constructor(private authguard :AuthGuard){

}

onSubmit()
{
 this.authguard.loginSuccess=true;
}
  
}

