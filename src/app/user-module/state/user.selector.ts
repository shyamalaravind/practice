import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserModuleState } from "./user.state";

const userModuleStateSelector = createFeatureSelector<UserModuleState>('userModuleState');

export const currentUserSelector = createSelector(userModuleStateSelector, (userModuleState) => userModuleState?.currentUser)

export const currentUserNameSelector = createSelector(currentUserSelector, (currentUser) => { return { firstName: currentUser?.firstName, lastName: currentUser?.lastName } })
