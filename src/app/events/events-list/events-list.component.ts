import { EventService } from './../services/event.service';
import { Component, OnInit } from '@angular/core';
import {Event,events} from '../../models/events-models';
@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  public events: Event[] = [];

  constructor( private eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.getEventsList().subscribe((input) => {this.events = input});
  }

  handleEvent(str: string)
  {
    console.log("event handled")
  }

}
