import { Component, Input } from '@angular/core';

@Component({
	selector: 'modal-template',
	templateUrl: './modal-template.component.html',
	styleUrls: ['./modal-template.component.css']
})
export class ModalTemplateComponent {
	@Input() justifyContent?: 'center' | 'flex-end' | 'flex-start';
	@Input() alignItems?: 'center' | 'flex-end' | 'flex-start';
}
