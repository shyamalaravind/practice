import { createAction, props } from "@ngrx/store";
import { User } from "../../models/user-models";

export const UserLoginAcion = createAction('User is logging in', props<User>());
export const UserProfileUpdateAction = createAction('User updated their profile', props<{ firstName: string, lastName: string }>())
