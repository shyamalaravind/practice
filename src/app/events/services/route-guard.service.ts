import { EventService } from './event.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';

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
