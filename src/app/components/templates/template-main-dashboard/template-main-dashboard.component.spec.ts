import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateMainDashboardComponent } from './template-main-dashboard.component';

describe('TemplateMainDashboardComponent', () => {
  let component: TemplateMainDashboardComponent;
  let fixture: ComponentFixture<TemplateMainDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateMainDashboardComponent]
    });
    fixture = TestBed.createComponent(TemplateMainDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
