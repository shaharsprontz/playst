import { Component, Injectable } from '@angular/core';
// We will need to import a couple of specific API’s for dealing with reactive forms
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
//import { User } from '.../server/db/user.js';


@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  // The FormGroup object as you may remember from the simple form example exposes various API’s for dealing with forms. Here we are creating a new object and setting its type to FormGroup
  // complexForm : FormGroup;

 
  
  // // We are passing an instance of the FormBuilder to our constructor
  // constructor(fb: FormBuilder, private router: Router){
  //   // Here we are using the FormBuilder to build out our form.
  //   this.complexForm = fb.group({
  //     // We can set default values by passing in the corresponding value or leave blank if we wish to not set the value. For our example, we’ll default the gender to female.
  //     firstName: ['', Validators.required],
  //     lastName: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
  //     username: ['', Validators.required],
  //     email: ['', Validators.required],
  //     password: ['', Validators.required],

  //   })
  // }

  // // Again we’ll implement our form submit function that will just console.log the results of our form
  // submitForm(data){
  //   console.log('Reactive Form Data: ')
  //   console.log(data);
  //   //this.router.navigate(['/playlist']);
  // }

  // saveCreds() {
  //   this.Routes.navigate(['/playlist']);
  // }
}