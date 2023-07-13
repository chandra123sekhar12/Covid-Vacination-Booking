import { Component } from '@angular/core';
import { CvserviceService } from '../cvservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent {
location={
  name:''
}
centers:any;
count=10;

constructor(private cvservice : CvserviceService, private route:Router ) { }
  
ngOnInit(): void {}

logout(){
  this.route.navigate(["/main"]);
}

getcenter(){
  this.cvservice.get(this.location.name)
  .subscribe(
    {
    next:response => {
      console.log(response);
      this.centers=response;
      
  },
  error:error => {
    console.log(error);
  }});
}

}
