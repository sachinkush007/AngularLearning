import { Injectable } from '@angular/core';
import { Product } from '../cart/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Product[] = [];
  item!:any;
  public totalPrice = 0;
  constructor() { }

  addPrduct(product: Product) {
    let item = this.cart.find(item => item.id === product.id);
    if (item) {
     // item.quantity++;
     this.totalPrice += product.price;
    } else {
      product.quantity = 1;
      this.cart.push(product);
      this.totalPrice += product.price;
    }
    // this.totalPrice += product.price;// Add the product price to the total price
  }

  getCart(): Product[] {
    return this.cart;
  }

  decreaseProduct(product: Product) {
    let item = this.cart.find(item => item.id === product.id);
    if (item?.quantity) {
      item.quantity--;
      if (item.quantity === 0) {
        let index = this.cart.indexOf(item);
        this.cart.splice(index, 1);
      }
      this.totalPrice -= product.price;
    }
  }

  increseProduct(product:Product){
    let item = this.cart.find(item => item.id === product.id);
    if (item?.quantity) {
      item.quantity++;
      if (item.quantity === 0) {
        let index = this.cart.indexOf(item);
        this.cart.splice(index, 1);
      }
      this.totalPrice += product.price;
    }
  }
}