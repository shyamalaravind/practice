import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Event } from '../../models/events-models';
@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css'],
})
export class EventThumbnailComponent implements OnInit {
  @Input() event!: Event;

  @Output() eventClick: EventEmitter<string> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onClickHandler() {
    this.eventClick.emit('emmitted');
  }

  logSomeFoo() {
    console.log('foo');
  }

  getTimeDivStyles(event: Event): { [klass: string]: any } {
    return event?.time === '8:00 am'
      ? { color: '#003300', 'font-weight': 'bold' }
      : { color: '#bbb', 'font-weight': 'normal' };
  }
}
