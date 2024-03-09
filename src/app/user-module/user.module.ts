import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { userRoutes } from '../routes/routes';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserAuthenticationService } from './services/user-authentication.service';



@NgModule({
  declarations: [UserProfileComponent, UserLoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(userRoutes)
  ]
})
export class UserModule { }
