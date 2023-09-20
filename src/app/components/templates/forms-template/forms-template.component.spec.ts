import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsTemplateComponent } from './forms-template.component';

describe('FormsTemplateComponent', () => {
  let component: FormsTemplateComponent;
  let fixture: ComponentFixture<FormsTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormsTemplateComponent]
    });
    fixture = TestBed.createComponent(FormsTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
