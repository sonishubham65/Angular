import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute} from "@angular/router";
import { AppointmentService } from '../appointment.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  //providers:[AppointmentService]
})
export class ListComponent implements OnInit {

  restaurants;
  constructor(private route: ActivatedRoute,private appointmentService:AppointmentService) { 
    this.restaurants = this.route.snapshot.data.restaurants.data.restaurant;
    console.log(this.restaurants);
    
  }

  ngOnInit() {
    this.appointmentService.restaurants().subscribe(data=>{
      console.log(data,"from component")
    });
    
  }

}
