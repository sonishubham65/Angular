import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
import {MatSnackBar} from '@angular/material';
@Injectable({
  providedIn: 'root',
})
export class GlobalService {
    vars = {
        apiURL : "http://192.168.1.238:3001/api/",
        token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozLCJ0aW1lem9uZSI6ImFzaWEva29sa2F0YSIsImlhdCI6MTU0OTAwMTEzNiwiZXhwIjoxNTY5MDAxMTM2fQ.tfQOerhePGKIaUEQEvaWI96uiYvhZtxbsZzYAlCLAxQ",
        location : {
            latitude:"",
            longitude:"",
        }
    }
    
    constructor(private http: HttpClient, private router: Router, public snackBar: MatSnackBar) { 

    }
    
    public handleError(err){
        this.snackBar.open(err.error.message, "cancel", {
            duration: 2000,
        });
        switch(err.status){
            case 500:{
                
            }break;
            case 401:{
                this.router.navigate(["login"]);
            }break;
        }
    }
    public loadLocation(){
        let THIS = this;
        return new Promise(function(resolve, reject) {
            navigator.geolocation.getCurrentPosition(loc => {
                THIS.vars.location = {
                    latitude:loc.coords.latitude.toString(),
                    longitude:loc.coords.longitude.toString()
                };
                resolve(1);
            },err => {
                reject(0);
            });
        })
    }
    
}


  