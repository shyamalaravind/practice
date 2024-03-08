import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Event, events } from '../../models/events-models';
@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  public getEventsList() : Observable<Event[]>
  {
    return of(events)
  }

  public getEvent(eventId: number) : Observable<Event | undefined>
  {
    return of(events.find(event => event.id == eventId));
  }
}
