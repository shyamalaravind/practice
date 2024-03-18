import { NgModule, isDevMode } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes/routes';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { Error404Component } from './errors/404-error.component';
import { UserAuthenticationService } from './user-module/services/user-authentication.service';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    StoreModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: !isDevMode(),
      name: 'Events Service'
    }),
    ReactiveFormsModule
  ],
  providers: [UserAuthenticationService],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
