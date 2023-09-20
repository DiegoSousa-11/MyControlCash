import { Component, Input } from '@angular/core';

@Component({
	selector: 'forms-template',
	templateUrl: './forms-template.component.html',
	styleUrls: ['./forms-template.component.css'],
})
export class FormsTemplateComponent {
	@Input() bannerPosition!: 'left' | 'right';
}
