import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './app.auth.service';
@Injectable({
    providedIn:'root'
})
export class AuthGuardService implements CanActivate {
  constructor(public auth: AuthService, public router: Router) {}
  canActivate(): any {
    return this.auth.isAuthenticated()
    .then(result=>{
      
      if (result) {
        console.log(result);
        return true;
      }else{
        this.router.navigate(['login']);
        return false;
      }
    })
    .catch(err=>{
      this.router.navigate(['login']);
      console.log(err);
      return false;
    });
  }
}