import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ILastTransactionByType } from '@models/ILastTransactionsByType';
import { IOperation } from '@models/IOperation';

@Component({
	selector: 'organism-dashboard-resume',
	templateUrl: './dashboard-resume.component.html',
	styleUrls: ['./dashboard-resume.component.css'],
})
export class DashboardResumeComponent {
	@Output() addNewTransactionClick: EventEmitter<IOperation['type']> = new EventEmitter();

	@Input() patrimony!: number;
	@Input() lastTransactions!: ILastTransactionByType;

	newTransactionEmmit(type: IOperation['type']) {
		this.addNewTransactionClick.emit(type);
	}
}
