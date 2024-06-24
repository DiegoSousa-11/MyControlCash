import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'atom-checkbox',
	templateUrl: './checkbox.component.html',
	styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent {
	@Input() label!: string;
    @Input() checked!: boolean;
    @Output() onChange: EventEmitter<boolean> = new EventEmitter<boolean>();

	onClick() {
    	this.checked = !this.checked;
		this.onChange.emit(this.checked);
	}
}
