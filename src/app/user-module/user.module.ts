import { UserModuleReducer } from './state/user.reducer';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { userRoutes } from '../routes/routes';
import { UserLoginComponent } from './user-login/user-login.component';
import { StoreModule } from '@ngrx/store';



@NgModule({
  declarations: [UserProfileComponent, UserLoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(userRoutes),
    StoreModule.forFeature('userModuleState', UserModuleReducer),
    ReactiveFormsModule,
    FormsModule
  ]
})
export class UserModule { }
