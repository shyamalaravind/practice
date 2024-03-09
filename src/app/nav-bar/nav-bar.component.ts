import { Component, OnInit } from '@angular/core';
import { UserAuthenticationService } from '../user-module/services/user-authentication.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public authenticationService: UserAuthenticationService) { }

  ngOnInit(): void {
  }

}
