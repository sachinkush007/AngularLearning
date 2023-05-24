import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, of } from 'rxjs';
import { timeInterval } from 'rxjs/internal/operators/timeInterval';
import { delay } from 'rxjs/operators';
// import { timeInterval } from 'rxjs/operators';
interface User {
  id: number;
  name: string;
}
@Component({
  selector: 'app-myasync-pipe',
  templateUrl: './myasync-pipe.component.html',
  styleUrls: ['./myasync-pipe.component.css'],
})
export class MyasyncPipeComponent implements OnInit,OnDestroy {
  time!: string;
  timeSubscription: Subscription |undefined;
  user$: Observable<User> = of(
    { id: 1, name: 'Sachin' },
    { id: 2, name: 'Akash' }
  ).pipe(delay(1000));
  user!: User;

  constructor() {}
 

  ngOnInit(): void {
     this.timeSubscription =this.user$.subscribe((user) => {
      this.user = user;
    });

  }
  ngOnDestroy(): void {
    this.timeSubscription?.unsubscribe();
   }

 
}
