import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantAppComponent } from './restaurant-app.component';

describe('RestaurantAppComponent', () => {
  let component: RestaurantAppComponent;
  let fixture: ComponentFixture<RestaurantAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
