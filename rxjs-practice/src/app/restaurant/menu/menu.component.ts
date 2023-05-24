import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  dishes = [
    { name: 'Spaghetti Bolognese', price: 12.99 },
    { name: 'Margherita Pizza', price: 9.99 },
    { name: 'Grilled Salmon', price: 18.99 },
    { name: 'Caesar Salad', price: 8.99 },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
