import { Component, Input } from '@angular/core';
import { IOperations } from 'src/app/models/IOperation';

@Component({
	selector: 'statement-template',
	templateUrl: './statement-template.component.html',
	styleUrls: ['./statement-template.component.css'],
})
export class StatementTemplateComponent {
	@Input() operations!: IOperations;
}
