import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppAngularModule } from './app.angular.module';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRouteModule } from './app.angular.route';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppInterceptor } from './app.interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
export function tokenGetter() {
  return localStorage.getItem('access_token');
}


const config: SocketIoConfig = { url: 'http://192.168.1.238:3001?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo0LCJ0aW1lem9uZSI6ImFzaWEva29sa2F0YSIsImlhdCI6MTU0OTk1MzgwNCwiZXhwIjoxNTY5OTUzODA0fQ.3mLPBflCIpAYD3td3WrgJFD3sKZXgk1ZGZbqdiWrtKo', options: {}};


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    AppRouteModule,
    AppAngularModule,
    FormsModule,
    HttpClientModule ,
    JwtModule.forRoot({
        config: {
          tokenGetter: tokenGetter,
          whitelistedDomains: ['localhost:4200'],
          blacklistedRoutes: []
        }
    }),
    SocketIoModule.forRoot(config)
  ],
  exports:[
    RouterModule
  ],
  providers: [
      {
        provide:HTTP_INTERCEPTORS,
        useClass: AppInterceptor,
        multi:true
      }
  ],
  bootstrap: [AppComponent]
})



 

export class AppModule { }
