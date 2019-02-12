import { NgModule }       from '@angular/core';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { GlobalService } from './app.global.service';
import {MatSnackBar} from '@angular/material';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
    vars = {
        apiURL : "http://192.168.1.238:3001/api/",
        token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozNywidGltZXpvbmUiOiJBc2lhL0NhbGN1dHRhIiwiaWF0IjoxNTQ4MDY4MDk0LCJleHAiOjE1NjgwNjgwOTR9.3GDiP60q0hC0TsXO60K5TWarBDoedy_y2trw9Y9bBWs",
        
    }
    
    constructor(public jwtHelper: JwtHelperService, private _gs:GlobalService, public snackBar: MatSnackBar) { 

    }
    public isAuthenticated(){
        var jwtHelper = this.jwtHelper;
        var _gs = this._gs;
        var snackBar = this.snackBar
        return new Promise(function(resolve, reject) {
            const token = localStorage.getItem('token');
            let isTokenExpired = jwtHelper.isTokenExpired(token);
            if(isTokenExpired){
                reject();
            }else{
                resolve();
            }
            
        }).then(
            function(result) { 
                return 1; 
            },
            function(error) { 
                let err = 'Invalid token, Please login again.';
                snackBar.open(err, "cancel", {
                    duration: 2000,
                });
                return false;
            }
        );
    }
}

