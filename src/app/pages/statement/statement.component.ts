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

	statement!: IOperations;

	constructor(private statementService: StatementService) {}

	ngOnInit(): void {
		const currentDate = new Date();
		const endDate = new Date(currentDate.setMonth(currentDate.getMonth() - 1));

		const payload: IStatementQueryParams = {
			startDate: convertTimeDateToDate(endDate),
			endDate: convertTimeDateToDate(new Date()),
			limit: StatementComponent.LIMIT,
			page: 1
		};

		this.loadStatement(payload);
	}

	private loadStatement(payload: IStatementQueryParams) {
		this.statementService.getStatement(payload).subscribe({
			next: (statement) => this.statement = statement
		});
	}
}
