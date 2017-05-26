import {NgModule} from '@angular/core'
import {RouterModule} from '@angular/router'
import {FormsModule,ReactiveFormsModule  } from '@angular/forms'
import {CommonModule} from '@angular/common'

import {RegisterComponent} from './register.component';
import {RegisterSuccessComponent} from './regSuceess.component';
import {RegisterRoutingModule} from './register.routing';
import { ValidationService } from '../Services/validation.service';
import {ControlMessages} from '../common/validation.messages';
import {EmailValidator} from '../Directives/validateEmail';

@NgModule({
    imports:[
        RouterModule,  
        FormsModule,
        CommonModule,
        ReactiveFormsModule ,        
        RegisterRoutingModule     
        ],
        providers:[ValidationService],
        directives:[EmailValidator]
     declarations:[RegisterComponent,RegisterSuccessComponent,ControlMessages,EmailValidator],
     bootstrap:[RegisterComponent]   
    
})

export class RegisterModule {}