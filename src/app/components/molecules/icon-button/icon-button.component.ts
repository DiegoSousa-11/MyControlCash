import { Component, Input } from '@angular/core';

@Component({
	selector: 'molecule-icon-button',
	templateUrl: './icon-button.component.html',
	styleUrls: ['./icon-button.component.css'],
})
export class IconButtonComponent {
	@Input() icon!: string;
	@Input() color?: string;
	@Input() backgroundColor?: string;
	@Input() fill?: boolean;
}
