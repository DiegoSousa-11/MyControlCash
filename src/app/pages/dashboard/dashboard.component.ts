import { Component } from '@angular/core';
import { IOperations } from '@models/IOperation';
import { StatementService } from '@services/statement.service';
import { Observable, map } from 'rxjs';

@Component({
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
	statement$: Observable<IOperations> = this.statementService.getStatement().pipe(
		map(data => data.slice(0, 3))
	);

	constructor(private statementService: StatementService) { }
}
