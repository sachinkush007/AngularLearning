import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { OperatorsComponent } from './operators/operators.component';
import { FilterComponent } from './filter/filter.component';
import { FilterPipe } from './pipes/filter.pipe';
import { MyasyncPipeComponent } from './myasync-pipe/myasync-pipe.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ReplaySubComponent } from './replay-sub/replay-sub.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HiringComponent } from './hiring/hiring.component';
import { HeaderInterceptor } from './header.interceptor';
import { AuthGuard } from './gaurd/auth.guard';
import { ToDoEntryComponent } from './to-do-entry/to-do-entry.component';
import { ToDoParentComponent } from './to-do-parent/to-do-parent.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { LibraryComponent } from './library/library.component';
import { BookComponent } from './book/book.component';
import { ShelfComponent } from './shelf/shelf.component';
import { RestaurantModule } from './restaurant/restaurant.module';
import { CartModule } from './cart/cart.module';
import { StudentTableComponent } from './student-table/student-table.component';
@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    OperatorsComponent,
    FilterComponent,
    FilterPipe,
    MyasyncPipeComponent,
    NavigationComponent,
     ReplaySubComponent,
     HiringComponent,
     ToDoEntryComponent,
     ToDoParentComponent,
     PhotoListComponent,
     LibraryComponent,
     BookComponent,
     ShelfComponent,
     StudentTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RestaurantModule,
    CartModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:HeaderInterceptor,multi:true},
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
