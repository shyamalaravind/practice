import { EventService } from './event.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private eventService: EventService, private routerService: Router) { }
  canActivate(route: ActivatedRouteSnapshot): boolean {
    let response: boolean = false;

    this.eventService.getEvent(route.params['id']).subscribe(event => {
      if(event)
      {
        response = true;
      }
      else this.routerService.navigate(['/notFound']);
    })

    return response;
  }
}
