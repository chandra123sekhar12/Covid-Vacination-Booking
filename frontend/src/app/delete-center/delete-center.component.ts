import { Component } from '@angular/core';
import { CvserviceService } from '../cvservice.service';

@Component({
  selector: 'app-delete-center',
  templateUrl: './delete-center.component.html',
  styleUrls: ['./delete-center.component.css']
})
export class DeleteCenterComponent {
center={
  name:''
}
message:any

constructor(private cvservice : CvserviceService) { }
  
ngOnInit(): void {}

deletecenter(){
  this.cvservice.delete(this.center)
      .subscribe(
        {
        next:response => {
          console.log(response);
          this.message=response
          alert(this.message.message);
      },
      error:error => {
        console.log(error);
      }});
}
}
