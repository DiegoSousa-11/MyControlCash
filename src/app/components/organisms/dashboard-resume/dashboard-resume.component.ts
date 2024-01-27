import { Component, Input } from '@angular/core';
import { ILastTransactionByType } from '@models/ILastTransactionsByType';

@Component({
	selector: 'organism-dashboard-resume',
	templateUrl: './dashboard-resume.component.html',
	styleUrls: ['./dashboard-resume.component.css'],
})
export class DashboardResumeComponent {
	@Input() patrimony!: number;
	@Input() lastTransactions!: ILastTransactionByType;
}
