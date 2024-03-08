import { Routes } from "@angular/router";
import { EventsListComponent } from "../events/events-list/events-list.component";
import { EventDetailsComponent } from "../events/event-details/event-details.component";
import { CreateEventComponent } from "../events/create-event/create-event.component";
import { Error404Component } from "../errors/404-error.component";
import { RouteGuardService } from "../events/services/route-guard.service";
import { UserProfileComponent } from "../user-module/user-profile/user-profile.component";

export const appRoutes: Routes = [
  { path: 'events/new', component: CreateEventComponent },
  { path: 'events', component: EventsListComponent },
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [RouteGuardService] },
  { path: 'user', loadChildren: () => import('../user-module/user.module').then((m) => m.UserModule)},
  { path: '', redirectTo: 'events', pathMatch: 'full' },
  { path: 'notFound', component: Error404Component }
]

export const userRoutes: Routes = [
  { path: 'profile', component: UserProfileComponent}
]
