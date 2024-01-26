import { Component } from '@angular/core';
import { IOperations } from '@models/IOperation';
import { IUserDataResume } from '@models/IUserDataResume';
import { StatementService } from '@services/statement.service';
import { UserService } from '@services/user.service';
import { Observable, map } from 'rxjs';

@Component({
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
	statement$: Observable<IOperations> = this.statementService.getStatement().pipe(
		map(data => data.slice(0, 3))
	);

	userData$: Observable<IUserDataResume> = this.authService.getUserDashDataResume();

	constructor(private statementService: StatementService, private authService: UserService) { }
}
