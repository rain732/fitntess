import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmiCalComponent } from './bmi-cal.component';

describe('BmiCalComponent', () => {
  let component: BmiCalComponent;
  let fixture: ComponentFixture<BmiCalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BmiCalComponent]
    });
    fixture = TestBed.createComponent(BmiCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
