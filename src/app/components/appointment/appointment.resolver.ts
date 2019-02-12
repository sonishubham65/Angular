import { Injectable } from "@angular/core";
import { AppointmentService } from './appointment.service';

import {
  Router,
  ActivatedRoute,
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";

import { Observable,of,throwError } from "rxjs";
import { map, catchError,retry } from 'rxjs/operators';


@Injectable()
export class ListResolver implements Resolve<Observable<string>> {
  constructor(private router: Router, private appointmentService:AppointmentService) {
    
  }
  resolve(
    route: ActivatedRouteSnapshot,
    rstate: RouterStateSnapshot
  ): Observable<any> {
    return this.appointmentService.restaurants()  
    
  }
}
@Injectable()

export class DetailResolver implements Resolve<Observable<string>> {
  
  constructor(private router: Router,private route: ActivatedRoute, private appointmentService:AppointmentService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    rstate: RouterStateSnapshot
  ): Observable<any> {
    console.log("ROUTE",route);
    return this.appointmentService.restaurant(route.params.ID).pipe(
      map(data => {
        return data;
      }),
      catchError(err => { 
        console.log(err, 'errr'); 
        throw(false)
      })
    );
    
  }
}


@Injectable()
export class OrdersResolver implements Resolve<Observable<string>> {
  constructor(private router: Router, private appointmentService:AppointmentService) {
    
  }
  resolve(
    route: ActivatedRouteSnapshot,
    rstate: RouterStateSnapshot
  ): Observable<any> {
    return this.appointmentService.orders("ongoing");
    
  }
}