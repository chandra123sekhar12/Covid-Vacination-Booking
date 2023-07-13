import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SharedService {
  //sharedval=2;
  private sharedValueSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

  // updatevalue(newValue: any): void {
  //   this.sharedval = newValue;
  //   console.log(this.sharedval);
  // }
  getsharedvalue() {
    return this.sharedValueSubject.asObservable();
  }

  updatevalue(newValue: string): void {
    this.sharedValueSubject.next(newValue);
  }
  constructor() { }
}
