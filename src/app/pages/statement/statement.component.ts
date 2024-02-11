import { Component, OnInit } from '@angular/core';
import { IOperations } from '@models/IOperation';
import { IStatementQueryParams } from '@models/IStatementParams';
import { StatementService } from '@services/statement.service';
import { convertTimeDateToDate } from 'src/app/utils/convertTimeDateToDate';

@Component({
	templateUrl: './statement.component.html',
	styleUrls: ['./statement.component.css'],
})
export class StatementComponent implements OnInit {
	static LIMIT = 7;

	statement!: IOperations | null;
	pagesQuantity!: number;
	currentPage!: number;

	private payload: IStatementQueryParams = {
		startDate: convertTimeDateToDate(new Date(new Date().setMonth(new Date().getMonth() - 1))),
		endDate: convertTimeDateToDate(new Date()),
		limit: StatementComponent.LIMIT,
		page: 1
	};

	constructor(private statementService: StatementService) {}

	ngOnInit(): void {
		this.loadStatement(this.payload);
	}

	changePage(page: number) {
		this.payload.page = page;

		this.statement = null;
		this.loadStatement(this.payload);
	}

	private loadStatement(payload: IStatementQueryParams) {
		this.statementService.getStatement(payload).subscribe({
			next: (response) => {
				this.statement = response.statement;

				if(response.pagesQuantity && payload.page) {
					this.pagesQuantity = response.pagesQuantity;
					this.currentPage = payload.page;
				}
			}
		});
	}
}
