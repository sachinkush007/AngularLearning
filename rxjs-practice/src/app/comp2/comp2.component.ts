import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../service/utility.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  userName!:string;

  constructor(private utility:UtilityService) 
  { 
    this.utility.userName.subscribe(res=>{
      this.userName=res;
      console.log(res);
    })
  }

  ngOnInit(): void {
  }
  onChange(uname:any){
   console.log(uname);
   this.utility.userName.next(uname)
  }

}
