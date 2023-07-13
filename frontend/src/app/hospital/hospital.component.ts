import { Component } from '@angular/core';
import { CvserviceService } from '../cvservice.service';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})
export class HospitalComponent {

booking={
  name:'',
  aadharnumber:'',
  phonenumber:'',
  centername:'',
  vaccine:'',
  dosage:''
}

constructor(private cvservice : CvserviceService) { }
  
  ngOnInit(): void {}
  addbooking(){
    
      this.cvservice.createbooking(this.booking)
      .subscribe(
        {
        next:response => {
          console.log(response);
          alert("slot booked successfully");
      },
      error:error => {
        console.log(error);
      }});
  }
}
