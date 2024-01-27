import { Component, Input } from '@angular/core';

@Component({
	selector: 'organism-balance-controller',
	templateUrl: './balance-controller.component.html',
	styleUrls: ['./balance-controller.component.css'],
})
export class BalanceControllerComponent {
	@Input() patrimony!: number;
}
