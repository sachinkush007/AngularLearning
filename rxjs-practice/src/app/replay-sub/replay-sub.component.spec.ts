import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplaySubComponent } from './replay-sub.component';

describe('ReplaySubComponent', () => {
  let component: ReplaySubComponent;
  let fixture: ComponentFixture<ReplaySubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReplaySubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplaySubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
