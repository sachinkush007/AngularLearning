import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
 
  task:any;
  list:any[]=[];
  constructor() { }

  ngOnInit(): void {
  }
  addTask() {
   // this.list.push({id:this.list.length,name:this.task})
   this.list.push(this.task)
    console.log(this.list);
    this.task = ''; 
  }

}
