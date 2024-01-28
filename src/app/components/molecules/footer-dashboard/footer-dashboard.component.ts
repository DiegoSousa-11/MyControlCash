import { Component, EventEmitter, Output } from '@angular/core';
import { IOperation } from '@models/IOperation';

@Component({
	selector: 'molecule-footer-dashboard',
	templateUrl: './footer-dashboard.component.html',
	styleUrls: ['./footer-dashboard.component.css'],
})
export class FooterDashboardComponent {
	@Output() addNewTransactionClick: EventEmitter<IOperation['type']> = new EventEmitter();

	buttonClickEmit(type: IOperation['type']) {
		this.addNewTransactionClick.emit(type);
	}
}
