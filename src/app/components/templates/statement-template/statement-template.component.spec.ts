import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatementTemplateComponent } from './statement-template.component';

describe('StatementTemplateComponent', () => {
  let component: StatementTemplateComponent;
  let fixture: ComponentFixture<StatementTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatementTemplateComponent]
    });
    fixture = TestBed.createComponent(StatementTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
