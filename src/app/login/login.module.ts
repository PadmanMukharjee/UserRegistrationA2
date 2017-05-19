import {NgModule} from '@angular/core'
import {RouterModule,Router} from '@angular/router'
import { FormsModule,ReactiveFormsModule  }    from '@angular/forms';
import { CommonModule } from '@angular/common';  

import {LoginComponent} from './login.component';
import {LoginRoutingModule} from './login.routing';

import { AuthGuard } from '../Services/welcomeGuard.service';

@NgModule({
    imports:[
        RouterModule,        
        LoginRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule
        ],
        providers:[AuthGuard],
     declarations:[LoginComponent],
    bootstrap:[LoginComponent]
    
})

export class LoginModule {}