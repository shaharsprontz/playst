import { Component, Injectable } from '@angular/core';
// We will need to import a couple of specific API’s for dealing with reactive forms
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Person } from './person';
//import { createUsers } from '../../../server/models/user.js'


@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  // The FormGroup object as you may remember from the simple form example exposes various API’s for dealing with forms. Here we are creating a new object and setting its type to FormGroup
  // We are passing an instance of the FormBuilder to our constructor
    // Here we are using the FormBuilder to build out our form.
 
  constructor(public http: Http) { }

  persons = [];
  counter = 0;
  submitted = false;
  person;
  onSubmit(value) { 
    this.person = new Person(value.name, value.email, value.age);
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    if (value) {
      this.persons.push(this.person);
    }
    this.counter++;
    this.submitted = true;
    this.http.post('http://localhost:3000',
      JSON.stringify(this.person), { headers: headers })
      .subscribe(err => console.log(err));
  }

  // onSubmit(data){
  //   console.log('Get Form Data: ')
  //   console.log(data);
  //   this.router.navigate(['/playlist']);
  // }
}

