import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { Product } from '../product';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  cart: Product[] = [];

  constructor(public cartService: CartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
  }

  decreaseProduct(product: Product) {
    this.cartService.decreaseProduct(product);
  }
 
  increseProduct(product:Product){
    this.cartService.increseProduct(product);
  }
}
