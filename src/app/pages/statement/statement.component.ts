import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IOperations } from 'src/app/models/IOperation';
import { StatementService } from 'src/app/services/statement.service';

@Component({
	templateUrl: './statement.component.html',
	styleUrls: ['./statement.component.css'],
})
export class StatementComponent {
	statement$: Observable<IOperations> = this.statementService.getStatement();

	constructor(private statementService: StatementService) {}
}
