import {NgModule} from '@angular/core'
import {RouterModule} from '@angular/router'
import {FormsModule,ReactiveFormsModule  } from '@angular/forms'
import {CommonModule} from '@angular/common'

import {RegisterComponent} from './register.component';
import {RegisterRoutingModule} from './register.routing';

@NgModule({
    imports:[
        RouterModule,  
        FormsModule,
        CommonModule,
        ReactiveFormsModule ,        
        RegisterRoutingModule     
        ],
     declarations:[RegisterComponent],
     bootstrap:[RegisterComponent]   
    
})

export class RegisterModule {}