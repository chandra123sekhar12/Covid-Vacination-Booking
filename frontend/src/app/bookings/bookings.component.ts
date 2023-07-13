import { Component } from '@angular/core';
import { CvserviceService } from '../cvservice.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent {
  bookings:any;

  constructor(private cvservice : CvserviceService) { }
  
  ngOnInit(){
    this.retrivebookings();
  }

  retrivebookings(){
    this.cvservice.getbookings()
    .subscribe(
      {
      next:data=>{
        this.bookings=data;
        console.log(data);},
      error:error=>{
          console.log(error);
        }
      });
  }
}
