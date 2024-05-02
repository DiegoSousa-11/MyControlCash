import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDropDownComponent } from './menu-drop-down.component';

describe('MenuDropDownComponent', () => {
  let component: MenuDropDownComponent;
  let fixture: ComponentFixture<MenuDropDownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuDropDownComponent]
    });
    fixture = TestBed.createComponent(MenuDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
