import { Component } from '@angular/core';
import { ILastTransactionByType } from '@models/ILastTransactionsByType';
import { IUserDataResume } from '@models/IUserDataResume';
import { TransactionService } from '@services/transaction.service';
import { UserService } from '@services/user.service';
import { Observable } from 'rxjs';

@Component({
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
	userData$: Observable<IUserDataResume> = this.authService.getUserDashDataResume();
	lastTransactions$: Observable<ILastTransactionByType> = this.transactionService.getLastUserTransactionsByType();

	constructor(private authService: UserService, private transactionService: TransactionService) { }
}
