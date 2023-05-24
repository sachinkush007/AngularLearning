import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export class MenuItem {
  name!: string;
  price!: number;
}
@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  getMenuItems(): Observable<MenuItem[]> {
    const menuItems: MenuItem[] = [
      { name: 'Item 1', price: 10 },
      { name: 'Item 2', price: 15 },
      { name: 'Item 3', price: 20 }
    ];

    return of(menuItems);
  }
  constructor() { }
}
