import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-parent',
  templateUrl: './to-do-parent.component.html',
  styleUrls: ['./to-do-parent.component.css']
})
export class ToDoParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  task:any;
  list:any[]=[];
  
  addTask() {
    this.list.push({id:this.list.length,name:this.task})
    console.log(this.list);
    this.task = ''; 
  }

  deleteTask(index: number) {
    this.list.splice(index, 1);
  }
  editTask(task: {index: number, name: string}) {
    this.list[task.index].name = task.name;
  }

}
