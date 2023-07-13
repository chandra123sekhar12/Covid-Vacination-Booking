import { Component, OnInit } from '@angular/core';
import { CvserviceService } from '../cvservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  user={name:'' ,
  password:'',
  cpassword:'',
  email:'',
  pno:''};

  constructor(private cvservice : CvserviceService,  private route:Router) { }
  
  ngOnInit(): void {}
  saveuser(){
    if(this.user.password==this.user.cpassword){
      console.log("haii")
      this.cvservice.createuser(this.user)
      .subscribe(
        {
        next:response => {
          console.log(response);
          alert("user registered successfully");
          this.route.navigate(["/login"]);
      },
      error:error => {
        console.log(error);
      }});
    }
    else if(this.user.password!=this.user.cpassword){
      alert("check password!");
    }
  }
}
