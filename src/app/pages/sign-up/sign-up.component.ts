import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EMPTY, catchError } from 'rxjs';
import { IUser } from 'src/app/models/IUser';
import { UserService } from 'src/app/services/user.service';

@Component({
	selector: 'app-sign-up',
	templateUrl: './sign-up.component.html',
	styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {

	constructor(private userService: UserService, private router: Router) {}

	registerUser($event: { finishRequest: () => void, user: IUser }) {
		this.userService.createUser($event.user)
			.pipe(
				catchError((error) => {
					console.log(error);
					return EMPTY;
				})
			)
			.subscribe({
				next: () => {
					this.router.navigate(['/Login']);
				},
				complete: () => $event.finishRequest()
			});
	}
}
