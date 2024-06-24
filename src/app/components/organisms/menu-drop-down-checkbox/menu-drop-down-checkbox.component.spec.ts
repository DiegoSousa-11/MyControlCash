import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDropDownCheckboxComponent } from './menu-drop-down-checkbox.component';

describe('MenuDropDownCheckboxComponent', () => {
	let component: MenuDropDownCheckboxComponent;
	let fixture: ComponentFixture<MenuDropDownCheckboxComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [MenuDropDownCheckboxComponent]
		});
		fixture = TestBed.createComponent(MenuDropDownCheckboxComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
