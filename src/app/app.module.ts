import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import {AppRoutingModule} from './app.routing';
import {AppComponent}  from './app.component';
import {LoginModule} from './login/login.module';
import {RegisterModule} from'./register/register.module';
import {WelcomeModule} from'./welcome/welcome.module';

@NgModule({
    imports: [BrowserModule,RouterModule,
     AppRoutingModule,LoginModule,RegisterModule,WelcomeModule
    ],
    declarations:[AppComponent],
    bootstrap:[AppComponent]   
})

export class AppModule { }