import { Component, OnInit } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'My Angular App';
  todaydate;
  newcomponentproperty;
  newcomponent = 'Entered in newcomponent';

  constructor(private myservice: MyserviceService) {



  }
  ngOnInit( ) {
    this.todaydate = this.myservice.showTodayDate();
    this.newcomponentproperty = this.myservice.showTodayDate;
  }
}
