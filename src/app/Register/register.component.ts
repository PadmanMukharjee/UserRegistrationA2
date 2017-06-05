import {Component} from '@angular/core';
import {FormsModule, ReactiveFormModule } from '@angular/forms';
import { FormControl, FormGroup,Validators,FormBuilder,Email } from '@angular/forms';
import {ControlMessages} from '../common/validation.messages';
import { ValidationService } from '../Services/validation.service';

//import {CommonModule} from '@angular/common';

@Component({
  moduleId:module.id,   
    templateUrl:'./register.html'
})
export class RegisterComponent{
regForm:FormGroup;


  ngOnInit(): void {
    this.createForm();
  }

 constructor(private fb: FormBuilder) { 
    this.createForm();
  }

createForm() {
  this.regForm=this.fb.group({
    name:['',Validators.required],
  username : ['',[Validators.required,Validators.minLength(4),Validators.maxLength(6)]],
    password : ['',[Validators.required,Validators.minLength(8),ValidationService.passwordValidator]],
    zip: ['', Validators.pattern('[0-9]{5}')],
    email:['',[Validators.required,ValidationService.emailValidator]]
});

/* this.regForm.valueChanges
     .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now
*/
  }

   formErrors = {
    'name':'',
    'username': '',
    'password':'',
    'zip':''    ,
    'email':''
  };

  onValueChanged(data?: any) {
    if (!this.regForm) { return; }
    const form = this.regForm;

    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

    validationMessages = {
    'name':{
       'required':      'Name is required.',
    },
    'username': {
      'required':      'User Name is required.',
      'minlength':     'Name must be at least 4 characters long.',
      'maxlength':     'Name cannot be more than 24 characters long.',
      'forbiddenName': 'Someone named "Bob" cannot be a hero.'
    },
    'password':{
      'required':      'Password is required.',
      'minlength':     'Name must be at least 8 characters long.',
    },
    'zip':{
      'pattern':'ZIP code pattern is not correct',
    },
    'email':{
       'required':      'Email is required.'
    }
  };



}