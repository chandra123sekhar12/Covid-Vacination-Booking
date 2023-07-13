import { Component } from '@angular/core';
import { CvserviceService } from '../cvservice.service';
@Component({
  selector: 'app-add-center',
  templateUrl: './add-center.component.html',
  styleUrls: ['./add-center.component.css']
})
export class AddCenterComponent{

  center={name:'' ,
  location:'',
  number:'',
  timings:''};

  constructor(private cvservice : CvserviceService) { }
  
  ngOnInit(): void {}
  addcenter(){
    
      this.cvservice.createcenter(this.center)
      .subscribe(
        {
        next:response => {
          console.log(response);
          alert("center added successfully");
      },
      error:error => {
        console.log(error);
      }});
  }
}
