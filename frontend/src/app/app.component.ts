import { Component,OnInit,OnDestroy} from '@angular/core';
import { SharedService } from './shared.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  val:any;
  private subscription: Subscription;
  

  constructor(private shared: SharedService) {
    this.subscription = this.shared.getsharedvalue().subscribe((value) => {
      this.val = value;
    });
    

   }
  
  

  
}
