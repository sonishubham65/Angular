import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  restaurant;
  constructor(
    private route: ActivatedRoute
  ) {
    
    this.route.params.subscribe((data) => {
      this.restaurant = this.route.snapshot.data.restaurant.data.restaurant;
      console.log("this.restaurant",this.restaurant);
    })
  }

  ngOnInit() {
    
  }

}
