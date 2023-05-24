import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../service/utility.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {

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
