import { UserModuleState } from "../user-module/state/user.state";

export interface AppState {
  userModuleState?: UserModuleState;
  session?: GlobalState;
}

export interface GlobalState {
  events?: Event[];
}
