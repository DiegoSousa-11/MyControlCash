import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceControllerComponent } from './balance-controller.component';

describe('BalanceControllerComponent', () => {
  let component: BalanceControllerComponent;
  let fixture: ComponentFixture<BalanceControllerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BalanceControllerComponent]
    });
    fixture = TestBed.createComponent(BalanceControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
