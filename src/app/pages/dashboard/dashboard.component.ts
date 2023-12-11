import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IOperations } from 'src/app/models/IOperation';
import { StatementService } from 'src/app/services/statement.service';

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
