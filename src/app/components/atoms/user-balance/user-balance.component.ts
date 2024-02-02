import { Component, Input } from '@angular/core';

@Component({
	selector: 'atom-user-balance',
	templateUrl: './user-balance.component.html',
	styleUrls: ['./user-balance.component.css'],
})
export class UserBalanceComponent {
	@Input() patrimony!: number | undefined;
}
