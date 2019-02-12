import { Injectable } from '@angular/core';
//import { AppointmentModule } from './appointment.module';
import { HttpClient,HttpErrorResponse,HttpHeaders } from '@angular/common/http';
import { GlobalService } from '../../app.global.service';
import { map, catchError,retry } from 'rxjs/operators';
import { Observable,of,throwError } from "rxjs";
@Injectable({
  //providedIn: AppointmentModule
  providedIn:'root'
})
export class AppointmentService {

  public age = 20;
  constructor(private http: HttpClient, private _gs:GlobalService) { 


    
  }
  restaurants(){
    let URL = "customer/restaurant/list";
    let args = {
      "filter":{
        "type":"veg",
        "location":{"latitude":"26.8881498","longitude":"75.7777577"},
        "search":"",
        "cuisines":[],
        
        
      },
      "offer":0,
      "fav":0,
      "current":1,
      "rating":0
    }
    return this.http.post(URL,args)
    .pipe(
      map(data=>{
        return data;
      }),
      catchError((error: any) => { 
        this._gs.handleError(error);
        throw(error.error.message);
      })
    )
    
  }
  
  restaurant(ID){
    let URL = "customer/restaurant/detail";
    let args = {
        token : this._gs.vars.token,
        "id":ID
    }
    return this.http.post(URL,args);
  }

  registerDelivery(data){
    let URL = "delivery/register/confirm";
    let args = data;
    return this.http.post(URL,args);
    
  }

  
  getAge(){
    return this.age;
  }
  setAge(age){
    //alert("set as "+age);
    this.age = age;
  }







  orders(type){
    let URL = "customer/orders/list";
    let args = {
      "current":1,
      "type":type
    }
    return this.http.post(URL,args)
    .pipe(
      map(data=>{
        return data;
      }),
      catchError((error: any) => { 
        this._gs.handleError(error);
        throw(error.error.message);
      })
    )
    
  }
  
}
