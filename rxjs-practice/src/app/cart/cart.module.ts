import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { MainClassComponent } from './main-class/main-class.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductListComponent,
    CartListComponent,
    MainClassComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CartModule { }
