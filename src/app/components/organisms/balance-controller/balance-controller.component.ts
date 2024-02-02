import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IOperation } from '@models/IOperation';

@Component({
	selector: 'organism-balance-controller',
	templateUrl: './balance-controller.component.html',
	styleUrls: ['./balance-controller.component.css'],
})
export class BalanceControllerComponent {
	@Output() addNewTransactionClick: EventEmitter<IOperation['type']> = new EventEmitter();

	@Input() patrimony!: number | undefined;

	newTransactionEmmit(type: IOperation['type']) {
		this.addNewTransactionClick.emit(type);
	}
}
