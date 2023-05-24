import { Component, OnInit } from '@angular/core';
export interface Product {
  id: number;
  url: string;
  name: string;
  price: number;
  quantity:number;
}
interface CartProduct {
  id: any;
  num: number;
}
@Component({
  selector: 'app-main-class',
  templateUrl: './main-class.component.html',
  styleUrls: ['./main-class.component.css']
})
export class MainClassComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
