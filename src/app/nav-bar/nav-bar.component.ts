import { AppState } from '../state/app.state';
import { Component, OnInit } from '@angular/core';
import { UserAuthenticationService } from '../user-module/services/user-authentication.service';
import { Store } from '@ngrx/store';
import { User } from '../models/user-models';
import { filter } from 'rxjs';
import { currentUserSelector } from '../user-module/state/user.selector';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public store: Store) { }

  currentUser?: User;
  ngOnInit(): void {

    this.store.select(currentUserSelector).pipe(filter(currentUser => !!currentUser)).subscribe({
      next: currentUser => this.currentUser = currentUser,
      error: (err) => console.log('it errored: ', err)
    });
  }

}

