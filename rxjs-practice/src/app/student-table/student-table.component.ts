import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
interface Data {
  name: string;
  email: string;
  phone: string;
  department:string;
}
@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css']
})
export class StudentTableComponent implements OnInit {
filteredDataList: any;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  dataList: Data[] = [];
  formData: Data = { name: '', email: '', phone: '',department:''};
  showForm = false;
  searchText: string = '';
  openForm() {
    this.showForm = true;
  }

  closeForm() {
    this.showForm = false;
    this.formData = { name: '', email: '', phone: '' ,department:''};
  }

  submitForm() {
    this.dataList.push(this.formData);
    this.closeForm();
  }
}
