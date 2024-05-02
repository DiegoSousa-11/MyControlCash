import { Component, OnDestroy, OnInit } from '@angular/core';
import { ILastTransactionByType } from '@models/ILastTransactionsByType';
import { IOperation } from '@models/IOperation';
import { IUserDataResume } from '@models/IUserDataResume';
import { AuthService } from '@services/auth.service';
import { TransactionService } from '@services/transaction.service';
import { UserService } from '@services/user.service';
import { EMPTY, Subscription, catchError } from 'rxjs';

@Component({
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit, OnDestroy {
	private isAuthenticatedSubscription!: Subscription;

	userData!: IUserDataResume;
	lastTransactions!: ILastTransactionByType;

	createTransactionModalIsOpen: boolean = false;
	modalTransactionType!: IOperation['type'];
	closeModal = () => this.createTransactionModalIsOpen = false;

	constructor(
		private authService: AuthService,
		private userService: UserService, 
		private transactionService: TransactionService
	) { }

	ngOnInit(): void {
		this.isAuthenticatedSubscription = this.authService.isAuthenticated.subscribe({
			next: (isAuthenticated: boolean) => {
				if(isAuthenticated) {
					this.loadUserDataResume();
					this.loadLastTransactions();
				}
			}
		});
	}

	ngOnDestroy(): void {
		this.isAuthenticatedSubscription.unsubscribe();
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
		this.loadUserDataResume();
		this.loadLastTransactions();
	}
}
