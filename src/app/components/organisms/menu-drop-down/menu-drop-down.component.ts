import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';

@Component({
	selector: 'organism-menu-drop-down',
	templateUrl: './menu-drop-down.component.html',
	styleUrls: ['./menu-drop-down.component.css']
})
export class MenuDropDownComponent {
	menuAxes!: { left: number, right: number };
	menuIsOpen: boolean = false;

	openMenu = () => this.menuIsOpen = true;
	closeMenu = () => this.menuIsOpen = false;
	
    @Input() values!: Array<string>;
    @Input() current!: string;

	@ViewChild('menuDropDown') menuDropDown !: ElementRef;

	@HostListener('document:click', ['$event'])
	onClick(event: MouseEvent) {
		if (!(event.target instanceof Node)) return;

		const menuDropDownElement = this.menuDropDown.nativeElement as HTMLElement;
		const clickedInside = menuDropDownElement.contains(event.target);

		if (!clickedInside) {
			this.closeMenu();
		}
	}
}
