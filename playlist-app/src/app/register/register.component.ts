import { Component, Injectable } from '@angular/core';
// We will need to import a couple of specific API’s for dealing with reactive forms
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
//import { Person } from './person';
import * as $ from 'jquery';
//import {UserService} from '../UserService'

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
     
}

