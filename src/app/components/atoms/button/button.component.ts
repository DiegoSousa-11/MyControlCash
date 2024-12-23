import { Component, Input } from '@angular/core';

@Component({
	selector: 'atom-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
	@Input() buttonText!: string;
	@Input() color?: string;
	@Input() backgroundColor: string = 'var(--primaryColor)';
	@Input() animationTheme: 'default' | 'white' = 'default';
	@Input() isLoading?: boolean = false;
}
