import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoParentComponent } from './to-do-parent.component';

describe('ToDoParentComponent', () => {
  let component: ToDoParentComponent;
  let fixture: ComponentFixture<ToDoParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
