import { Component, OnInit } from '@angular/core';
import {Login} from '../../core/models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: Login;
  loginFormHasErrors: boolean;

  constructor() {
    this.model = new Login();
  }

  ngOnInit() {
  }

}
