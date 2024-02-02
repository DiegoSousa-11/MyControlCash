import { Component, OnInit } from '@angular/core';
import { ILastTransactionByType } from '@models/ILastTransactionsByType';
import { IOperation } from '@models/IOperation';
import { IUserDataResume } from '@models/IUserDataResume';
import { TransactionService } from '@services/transaction.service';
import { UserService } from '@services/user.service';
import { EMPTY, catchError } from 'rxjs';

@Component({
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit{
	userData!: IUserDataResume;
	lastTransactions!: ILastTransactionByType;

	createTransactionModalIsOpen: boolean = false;
	modalTransactionType!: IOperation['type'];
	closeModal = () => this.createTransactionModalIsOpen = false;

	constructor(
		private userService: UserService, 
		private transactionService: TransactionService
	) { }

	ngOnInit(): void {
		this.loadUserDataResume();
		this.loadLastTransactions();
	}
		
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

	private loadLastTransactions() {
		this.transactionService.getLastUserTransactionsByType().subscribe({
			next: (lastTransactions) => this.lastTransactions = lastTransactions,
		});
	}

	private loadUserDataResume() {
		this.userService.getUserDashDataResume().subscribe({
			next: (userData) => this.userData = userData,
		});
	}

	private updateDashboardData() {
		// this.userData$ = this.userService.getUserDashDataResume();
		// this.lastTransactions$ = this.transactionService.getLastUserTransactionsByType();
	}
}
