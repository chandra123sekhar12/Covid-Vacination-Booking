import { Component,OnInit } from '@angular/core';
import { CvserviceService } from '../cvservice.service';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent implements OnInit{
  centers:any;

  constructor(private cvservice : CvserviceService) { }
  
  ngOnInit(){
    this.retrivecenters();
  }

  retrivecenters(){
    this.cvservice.getcenters()
    .subscribe(
      {
      next:data=>{
        this.centers=data;
        console.log(data);},
      error:error=>{
          console.log(error);
        }
      });
  }
  
 

}
