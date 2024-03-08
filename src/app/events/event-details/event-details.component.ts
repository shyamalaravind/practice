import { Component, Input, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { ActivatedRoute } from '@angular/router';
import { Event } from '../../models/events-models';

@Component({
  selector: 'event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  public event?:Event;
  constructor(private eventService: EventService, private route:ActivatedRoute)
  {

  }
  ngOnInit(): void {
    this.eventService.getEvent(this.route.snapshot.params['id']).subscribe(event =>
      this.event = event);
  }

}
