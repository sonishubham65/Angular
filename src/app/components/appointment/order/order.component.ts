import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute} from "@angular/router";
import { AppointmentService } from '../appointment.service';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orders;
  constructor(private route: ActivatedRoute,private appointmentService:AppointmentService) { 
    this.orders = this.route.snapshot.data.restaurants.data.restaurant;
    console.log(this.orders);
    
  }

  ngOnInit() {
    this.appointmentService.orders("past").subscribe(data=>{
      console.log(data,"from component")
    },err=>{
      console.log(err,"from component")
    });
    
  }


}
