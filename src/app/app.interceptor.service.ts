import { Injectable } from "@angular/core";

import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import {Request, XHRBackend, XHRConnection} from '@angular/http';
import { GlobalService } from './app.global.service';
@Injectable({providedIn: 'root'})
export class AppInterceptor implements HttpInterceptor{
    constructor(private _gs:GlobalService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        let xreq = req.clone();
        const https = req.clone({
            url: this._gs.vars.apiURL+req.url
        });
        https.body.token = localStorage.getItem("token");
        return next.handle(https);
    }    
}

