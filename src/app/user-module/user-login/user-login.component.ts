import { Router } from '@angular/router';
import { UserAuthenticationService } from './../services/user-authentication.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.scss'
})
export class UserLoginComponent {

  public json:JSON = JSON

  constructor(private userAuthenticationService: UserAuthenticationService, public routerService: Router) { }

  userName: string = '';
  password: string = '';

  login(login: any) {
    this.userAuthenticationService.loginUser(login.userData.userName, login.userData.password);
    this.routerService.navigate(['events'])
  }

}
