import { ChangeDetectorRef, Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';

@Component({
	selector: 'organism-menu-drop-down-checkbox',
	templateUrl: './menu-drop-down-checkbox.component.html',
	styleUrls: ['./menu-drop-down-checkbox.component.css']
})
export class MenuDropDownCheckboxComponent {
	menuIsOpen: boolean = false;

	openMenu() {
		this.menuIsOpen = true;
		this.changeDector.detectChanges();
		this.positionDropDownMenu();
	}

	closeMenu = () => this.menuIsOpen = false;
	
    @Input() values!: Array<{ description: string; checked: boolean }>;
	@Input() menuIcon!: string;

	@ViewChild('menuDropDown') menuDropDown !: ElementRef;
	@ViewChild('comboBox') comboBox!: ElementRef;

	constructor(private changeDector: ChangeDetectorRef) {}

	@HostListener('document:click', ['$event'])
	onClick(event: MouseEvent) {
		if (!(event.target instanceof Node)) return;

		const menuDropDownElement = this.menuDropDown.nativeElement as HTMLDivElement;
		const clickedInside = menuDropDownElement.contains(event.target);

		if (!clickedInside) {
			this.closeMenu();
		}
	}

	positionDropDownMenu() {
		const comboBoxElement = this.comboBox.nativeElement as HTMLDivElement;
		const comboBoxRect = comboBoxElement.getBoundingClientRect();
		const comboBoxPosition = comboBoxRect.right + comboBoxRect.width;
		const screenWidth = window.screen;

		if(comboBoxPosition > screenWidth.width) {
			const menuDropDownElement = this.comboBox.nativeElement as HTMLDivElement;
			menuDropDownElement.style.right = '2rem';
		}
	}
}
