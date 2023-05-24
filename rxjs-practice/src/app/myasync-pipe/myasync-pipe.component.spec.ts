import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyasyncPipeComponent } from './myasync-pipe.component';

describe('MyasyncPipeComponent', () => {
  let component: MyasyncPipeComponent;
  let fixture: ComponentFixture<MyasyncPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyasyncPipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyasyncPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
