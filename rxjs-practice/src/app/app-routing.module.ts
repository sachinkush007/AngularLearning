import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Comp1Component } from './comp1/comp1.component';
import { OperatorsComponent } from './operators/operators.component';
import { MyasyncPipeComponent } from './myasync-pipe/myasync-pipe.component';
import { HiringComponent } from './hiring/hiring.component';
import { AuthGuard } from './gaurd/auth.guard';
import { ToDoParentComponent } from './to-do-parent/to-do-parent.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { LibraryComponent } from './library/library.component';
import { RestaurantAppComponent } from './restaurant/restaurant-app/restaurant-app.component';
import { ProductListComponent } from './cart/product-list/product-list.component';
import { MainClassComponent } from './cart/main-class/main-class.component';
import { StudentTableComponent } from './student-table/student-table.component';
import { MenuComponent } from './restaurant/menu/menu.component';
import { ReservationComponent } from './restaurant/reservation/reservation.component';

const routes: Routes = [
  { path: '', component: OperatorsComponent },
  { path: 'sub', component: Comp1Component },
  { path: 'pipe', component: MyasyncPipeComponent },
  { path: 'hiring', component: HiringComponent, canActivate: [AuthGuard] },
  { path: 'to-do', component: ToDoParentComponent },
  { path: 'addphoto', component: PhotoListComponent },
  { path: 'library', component: LibraryComponent },
  {
    path: 'resto',
    component: RestaurantAppComponent,
    children: [
      {
        path: 'menu',
        component: MenuComponent,
      },
      {
        path: 'reservation',
        component: ReservationComponent,
      },
    ],
  },
  { path: 'cart', component: MainClassComponent },
  { path: 'student', component: StudentTableComponent },
  { path: 'menu', component: MenuComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
