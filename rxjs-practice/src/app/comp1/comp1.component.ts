import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../service/utility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
// Use for Subject
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
