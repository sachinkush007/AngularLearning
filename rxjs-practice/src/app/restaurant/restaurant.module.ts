import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantAppComponent } from './restaurant-app/restaurant-app.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from '../app-routing.module';
import { ReservationComponent } from './reservation/reservation.component';
@NgModule({
  declarations: [
    RestaurantAppComponent,
    MenuComponent,
    ReservationComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ]
})
export class RestaurantModule { }
