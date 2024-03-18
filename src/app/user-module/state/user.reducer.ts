import { createReducer, on } from "@ngrx/store";
import * as UserActions from "./user.action"
import { UserModuleState } from "./user.state";
import { User } from "../../models/user-models";

export const UserModuleReducer = createReducer<UserModuleState>(
  {},
  on(UserActions.UserLoginAcion,
    (state, currentUser) => {
      let returnState = { ...state, currentUser }
      return returnState
    }
  ),

  on(UserActions.UserProfileUpdateAction,
    (state, updatedName) => {
      if (state.currentUser) {
        const newCurrentUser: User = { ...state.currentUser, ...updatedName }
        return { ...state, currentUser: newCurrentUser }
      }
      else return state;
    }
  ),

  on(UserActions.UserProfileUpdateAction,
    (state, updatedName) => {
      if (state.allUsers && state.currentUser) {
        const currentUser: User = { ...state.currentUser, ...updatedName }
        const newAllUsers = { ...state.allUsers };
        newAllUsers[currentUser.userName] = currentUser
        return { ...state, allUsers: newAllUsers }
      }
      else return state;
    }

  )
)




