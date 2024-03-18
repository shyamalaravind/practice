import { User } from "../../models/user-models";

export interface UserModuleState {
  allUsers?: { [userName: string]: User },
  currentUser?: User;
}




