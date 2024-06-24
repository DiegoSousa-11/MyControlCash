import { Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';

@Component({
	selector: 'organism-menu-drop-down',
	templateUrl: './menu-drop-down.component.html',
	styleUrls: ['./menu-drop-down.component.css']
})
export class MenuDropDownComponent {
    @Input() values!: Array<string>;
    @Input() current!: string;
	@Output() onChange = new EventEmitter<string>();

	@ViewChild('menuDropDown') menuDropDown !: ElementRef;

	menuIsOpen: boolean = false;

	openMenu = () => this.menuIsOpen = true;
	closeMenu = () => this.menuIsOpen = false;
	
	@HostListener('document:click', ['$event'])
	onClick(event: MouseEvent) {
		if (!(event.target instanceof Node)) return;

		const menuDropDownElement = this.menuDropDown.nativeElement as HTMLElement;
		const clickedInside = menuDropDownElement.contains(event.target);

		if (!clickedInside) {
			this.closeMenu();
		}
	}

	changeCurrentValue(value: string) {
		this.current = value;
		this.onChange.emit(value);
		this.closeMenu();
	}
}
