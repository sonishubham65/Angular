import { Component, OnInit } from '@angular/core';
import {AppointmentService} from '../appointment/appointment.service';
import { Socket } from 'ngx-socket-io';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private appointmentService : AppointmentService,private socket: Socket) {}

  ngOnInit() {
    this.socket.emit("orderStatus",{"ID":1});

    this.socket.on("orderStatus",function(args){
      console.log("Order status",args)
    })
    this.socket.on("connection",function(args){
      console.log("connection",args)
    })
    this.socket.on("new_order",function(args){
      console.log("connection",args)
    })
  }

}
