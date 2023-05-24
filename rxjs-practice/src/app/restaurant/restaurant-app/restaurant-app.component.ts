import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, RestaurantService } from 'src/app/service/restaurant.service';
@Component({
  selector: 'app-restaurant-app',
  templateUrl: './restaurant-app.component.html',
  styleUrls: ['./restaurant-app.component.css']
})
export class RestaurantAppComponent implements OnInit {

  bestFoods: any[] = [
    {
      name: 'Food 1',
      imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAKLVQR7x7nvgkJ7dXM6VueElgOjgSX1JAIw&usqp=CAU',
      description: 'This is the description of food 1.'
    },
    {
      name: 'Food 2',
      imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWQFF_JK7_A-QOlDoJlWJnRSC-WekUrMPLYj6V-kTcxdkmhciY8UAMz-IlrXW5_jr3Rs0&usqp=CAU',
      description: 'This is the description of food 2.'
    },
   {
    name:'Food 3',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtJh8rTe2f1n3dYgrl8I5Vl-lx0ldpwOrC0SgqbrpCLW3sNQE9qHAppukmFeWuhDQ7vA8&usqp=CAU',
    description:''
   }
  ];
 
  constructor(private restaurantService: RestaurantService,
    private router: Router) {}
    searchEmail: string = '';
  ngOnInit(): void {
  }
  isHomePage(): boolean {
    return this.router.url === '/resto';
  }
}
