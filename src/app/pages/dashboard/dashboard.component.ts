import { Component } from '@angular/core';
import { ILastTransactionByType } from '@models/ILastTransactionsByType';
import { IOperation } from '@models/IOperation';
import { IUserDataResume } from '@models/IUserDataResume';
import { TransactionService } from '@services/transaction.service';
import { UserService } from '@services/user.service';
import { EMPTY, Observable, catchError } from 'rxjs';

@Component({
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
	userData$: Observable<IUserDataResume> = this.authService.getUserDashDataResume();
	lastTransactions$: Observable<ILastTransactionByType> = this.transactionService.getLastUserTransactionsByType();

	createTransactionModalIsOpen: boolean = false;
	modalTransactionType!: IOperation['type'];
	closeModal = () => this.createTransactionModalIsOpen = false;

	constructor(
		private authService: UserService, 
		private transactionService: TransactionService
	) { }

	openModal(type: IOperation['type']) {
		this.modalTransactionType = type;
		this.createTransactionModalIsOpen = true;
	}

	createTransaction($event: { finishRequest: () => void; transaction: IOperation }) {
		this.transactionService.createTransaction($event.transaction).pipe(
			catchError((error) => {
				console.error(error);
				return EMPTY;
			})
		).subscribe({
			next: () => {
				$event.finishRequest();
				this.closeModal();
				this.updateDashboardData();
			}
		});
	}

	private updateDashboardData() {
		this.userData$ = this.authService.getUserDashDataResume();
		this.lastTransactions$ = this.transactionService.getLastUserTransactionsByType();
	}
}
