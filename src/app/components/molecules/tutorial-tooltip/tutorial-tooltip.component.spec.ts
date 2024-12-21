import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialTooltipComponent } from './tutorial-tooltip.component';

describe('TutorialTooltipComponent', () => {
  let component: TutorialTooltipComponent;
  let fixture: ComponentFixture<TutorialTooltipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TutorialTooltipComponent]
    });
    fixture = TestBed.createComponent(TutorialTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
