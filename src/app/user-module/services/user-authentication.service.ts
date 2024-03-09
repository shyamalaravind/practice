import { Injectable } from '@angular/core';
import { User } from '../../models/user-models';

@Injectable()
export class UserAuthenticationService {

  currentUser?: User;
  constructor() { }

  loginUser(userName: string, password: string) {
    this.currentUser = {
      firstName: 'Kyoujuro',
      lastName: 'Rengoku',
      id: 1,
      userName: userName
    }
  }

  isAuthenticated(): boolean {
    return !!this.currentUser;
  }
}
