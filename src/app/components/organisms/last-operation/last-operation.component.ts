import { Component, Input } from '@angular/core';

@Component({
	selector: 'organism-last-operation',
	templateUrl: './last-operation.component.html',
	styleUrls: ['./last-operation.component.css'],
})
export class LastOperationComponent {
	@Input() type!: 'PAYMENT' | 'EXPENSE';
	@Input() value!: number;
	@Input() percent!: number;
}
