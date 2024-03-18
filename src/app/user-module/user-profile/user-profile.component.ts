import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { UserProfileUpdateAction } from '../state/user.action';
import { currentUserNameSelector } from '../state/user.selector';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html'
})
export class UserProfileComponent implements OnInit {

  constructor(private store: Store) {

  }

  profileForm: FormGroup<UserProfileForm> = new FormGroup({}) as any as FormGroup<UserProfileForm>;

  ngOnInit(): void {
    let firstName = '';
    let lastName = '';

    this.store.select(currentUserNameSelector).subscribe(currentUserName => {
      firstName = currentUserName?.firstName || '';
      lastName = currentUserName?.lastName || '';
    })

    this.profileForm = new FormGroup({ firstName: new FormControl(firstName), lastName: new FormControl(lastName) })
  }

  onForSubmit(profileForm: FormGroup<UserProfileForm>) {
    this.store.dispatch(UserProfileUpdateAction({
      firstName: profileForm.value.firstName || '',
      lastName: profileForm.value.lastName || ''
    }))
  }

}

interface UserProfileForm {
  firstName: FormControl<string | null>;
  lastName: FormControl<string | null>;
}
