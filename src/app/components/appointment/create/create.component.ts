import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';

import {AppointmentService} from '../appointment.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private appointmentService : AppointmentService) { }
  delivery = new FormGroup({
    first_name : new FormControl('Shubham'),
    last_name : new FormControl('soni'),
    email : new FormControl('sonishubham65@gmail.com'),
    phone : new FormControl('9782970790'),
    license : new FormControl(),
    age : new FormControl(),
    resident_proof : new FormControl(),
    bank_detail : new FormControl('PNB'),
    vehical_details : new FormControl('RJ14'),
  })
  age = 2 ;
  ngOnInit() {
    this.appointmentService.setAge(45)
  }
  onSubmit(){
    this.appointmentService.registerDelivery(
      this.delivery.value,
    ).subscribe(data=>{
      console.log(data)
    })
    
    
  }


}
