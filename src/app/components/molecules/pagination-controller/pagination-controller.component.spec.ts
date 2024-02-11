import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationControllerComponent } from './pagination-controller.component';

describe('PaginationControllerComponent', () => {
  let component: PaginationControllerComponent;
  let fixture: ComponentFixture<PaginationControllerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginationControllerComponent]
    });
    fixture = TestBed.createComponent(PaginationControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
