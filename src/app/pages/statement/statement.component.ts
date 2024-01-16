import { Component } from '@angular/core';
import { IOperations } from '@models/IOperation';
import { StatementService } from '@services/statement.service';
import { Observable } from 'rxjs';

@Component({
	templateUrl: './statement.component.html',
	styleUrls: ['./statement.component.css'],
})
export class StatementComponent {
	statement$: Observable<IOperations> = this.statementService.getStatement();

	constructor(private statementService: StatementService) {}
}
