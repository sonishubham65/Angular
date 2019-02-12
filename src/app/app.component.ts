import { Component } from '@angular/core';
import { GlobalService } from './app.global.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private _gs: GlobalService) {
    console.log("We are in component.");
      
    console.log("Global variables location in start",this._gs.vars.location);

    this._gs.loadLocation().then(data=>{
      console.log("Get Global variables location after accept allow",this._gs.vars.location);
      console.log("You can call next function to get location.");
    });
  }
  title = 'app';
}
