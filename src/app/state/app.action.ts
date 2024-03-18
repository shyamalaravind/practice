import { createAction, props } from "@ngrx/store";
import { Event } from "../models/events-models"

export const AllEventsUpdateAction = createAction('Fetching and update All Events in Store', props<{ events: Event[] }>());
