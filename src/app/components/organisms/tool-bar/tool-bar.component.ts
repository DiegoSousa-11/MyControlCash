import { Component, Input } from '@angular/core';

@Component({
	selector: 'organism-tool-bar',
	templateUrl: './tool-bar.component.html',
	styleUrls: ['./tool-bar.component.css'],
})
export class ToolBarComponent { 
	@Input() searchOn: boolean = true;
	@Input() dateFilterOn: boolean = true;
	@Input() operationsTypeOn: boolean = true;

	filterOptions = [
		{
			description: 'Pagamentos',
			checked: true
		},
		{
			description: 'Despesas',
			checked: true
		}
	];
}
