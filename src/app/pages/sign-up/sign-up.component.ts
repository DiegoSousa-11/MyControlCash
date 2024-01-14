import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EMPTY, catchError } from 'rxjs';
import { AlertEnum } from 'src/app/components/organisms/alert-notification/alertEnum';
import { IUser } from 'src/app/models/IUser';
import { UserService } from 'src/app/services/user.service';

@Component({
	selector: 'app-sign-up',
	templateUrl: './sign-up.component.html',
	styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
	alertStyle!: AlertEnum;
	alertNotificationVisible = false;
	alertText!: string;

	openAlertNotification = () =>  this.alertNotificationVisible = true;
	closeAlertNotification = () => this.alertNotificationVisible = false;

	constructor(private userService: UserService, private router: Router) {}

	registerUser($event: { finishRequest: () => void, user: IUser }) {
		this.userService.createUser($event.user)
			.pipe(
				catchError((request) => {
					this.errorHandle(request.error.error);
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

	private errorHandle(error: string) {
		switch(error) {
		case 'User already exists!': {
			this.alertText = 'Esse e-mail já foi cadastrado!';
			this.alertStyle = AlertEnum.ALERT;
			break;
		}
		default: {
			this.alertText = 'Não foi possível efetuar o cadastro!';
			this.alertStyle = AlertEnum.CRITICAL;
			break;
		}
		}

		this.openAlertNotification();
	}
}
