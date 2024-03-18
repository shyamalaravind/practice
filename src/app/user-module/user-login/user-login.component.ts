import { Router } from '@angular/router';
import { UserAuthenticationService } from './../services/user-authentication.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.scss'
})
export class UserLoginComponent {

  mouseEnter = false;
  constructor(private userAuthenticationService: UserAuthenticationService, public routerService: Router) { }

  userName: string = '';
  password: string = '';

  login(login: NgForm) {
    this.userAuthenticationService.loginUser(login.value.userName, login.value.password);
    this.routerService.navigate(['events']);
  }

}
