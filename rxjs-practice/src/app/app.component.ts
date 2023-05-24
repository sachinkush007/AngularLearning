import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UtilityService } from './service/utility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnChanges,DoCheck {
  title = 'rxjs-practice';

  userName!:string;

  constructor(private utility:UtilityService){
  this.utility.userName.subscribe(res=>{
  this.userName=res; 
 })
  }

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log('on chnage');
  }
  ngDoCheck(): void {
      console.log('do cheack');
  }

}
