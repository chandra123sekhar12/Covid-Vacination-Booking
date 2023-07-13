import { Component } from '@angular/core';
import { CvserviceService } from '../cvservice.service';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  user={email:'',
  password:'',
  mode:''
}

constructor( private cvservice:CvserviceService, private route:Router, private sharedservice:SharedService) { }

ngOnInit(): void {
}

login(){
  console.log(this.user);
  if (this.user.mode=='1'){
    console.log(this.user);
    this.cvservice.authlogin(this.user)
       .subscribe({
         next:response => {
           console.log(response);
           if(response==null){
             alert("Invalid username or password");
            }
            else{
              alert("login successfull!");
              this.route.navigate(["/location"]);
              
              // this.route.navigate(["/toolbar2/catelog"]);
              // sessionStorage.setItem("val",JSON.stringify(this.user.mode));
              this.sharedservice.updatevalue(this.user.mode);
            }
          },
          error:error => {
            console.log(error);
          }});
    
     }
     if (this.user.mode=='2'){
      console.log(this.user);
      this.cvservice.adminlogin(this.user)
         .subscribe({
           next:response => {
             console.log(response);
             if(response==null){
               alert("Invalid username or password");
              }
              else{
                alert("login successfull!")
                this.route.navigate(["/admin"]);
                // sessionStorage.setItem("val",JSON.stringify(this.user.mode));
                this.sharedservice.updatevalue(this.user.mode);
              }
            },
            error:error => {
              console.log(error);
            }});
      
       }
       
}

}
