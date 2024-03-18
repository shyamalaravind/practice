import { Injectable } from '@angular/core';
import { User } from '../../models/user-models';
import { timer } from 'rxjs';
import { Store } from '@ngrx/store';
import * as UserActions from '../state/user.action'

@Injectable()
export class UserAuthenticationService {

  constructor(private store: Store) { }


  loginUser(userName: string, password: string) {
    this.store.dispatch(UserActions.UserLoginAcion(allUsers[userName] || allUsers['default']))
  }




}

let allUsers: { [userName: string]: User } =
{
  embashira:
  {
    firstName: 'Kyoujuro',
    lastName: 'Rengoku',
    id: 0,
    userName: 'embashira'
  },
  gojoS:
  {
    firstName: 'Satorou',
    id: 1,
    lastName: 'Gojo',
    userName: 'gojoS'
  },
  default:
  {
    id: 2,
    firstName: 'Son',
    lastName: 'Goku',
    userName: 'son'
  }
}
