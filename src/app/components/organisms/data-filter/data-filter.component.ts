import { Component } from '@angular/core';

@Component({
	selector: 'organism-data-filter',
	templateUrl: './data-filter.component.html',
	styleUrls: ['./data-filter.component.css'],
})
export class DataFilterComponent {
	dataFilterOptions = ['Esta semana', 'Este mês', 'Este ano'];
}
