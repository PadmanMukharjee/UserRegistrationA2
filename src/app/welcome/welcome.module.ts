import {NgModule} from '@angular/core'
import {RouterModule} from '@angular/router'
import {FormsModule} from '@angular/forms'
import {CommonModule} from '@angular/common'

import {WelcomeComponent} from './welcome.component';
import {WelcomeRoutingModule} from './welcome.routing';
import { AuthGuard } from '../Services/welcomeGuard.service';

@NgModule({
    imports:[
        RouterModule,  
        FormsModule,
        CommonModule,
        WelcomeRoutingModule     
        ],
         providers:[AuthGuard],
     declarations:[WelcomeComponent],
     bootstrap:[WelcomeComponent]   
    
})

export class WelcomeModule {}