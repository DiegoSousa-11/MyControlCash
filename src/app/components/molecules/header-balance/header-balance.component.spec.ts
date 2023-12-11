import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBalanceComponent } from './header-balance.component';

describe('HeaderBalanceComponent', () => {
  let component: HeaderBalanceComponent;
  let fixture: ComponentFixture<HeaderBalanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderBalanceComponent]
    });
    fixture = TestBed.createComponent(HeaderBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
