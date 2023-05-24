import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-to-do-entry',
  templateUrl: './to-do-entry.component.html',
  styleUrls: ['./to-do-entry.component.css']
})
export class ToDoEntryComponent implements OnInit {

  @Input() masterName: string="";
  @Input() index:any;
  @Output() deleteTask = new EventEmitter<number>();
  @Output() editTask = new EventEmitter<{index: number, name: string}>();
   item={name:"sa", id:1}
   editing: boolean = false;
   originalName: string = "";
  constructor() { }
   
  ngOnInit(): void {
    this.originalName = this.masterName;
  }
  onDelete() {
    this.deleteTask.emit(this.index);
  }
  onEdit() {
    this.editing = true;
  }
  onSave() {
    if (this.masterName.trim() !== "") {
      this.editTask.emit({index: this.index, name: this.masterName});
      this.editing = false;
    } else {
      this.masterName = this.originalName;
      this.editing = false;
    }
  }
   
}
