import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IAuth, IAuthResponse } from '@models/IAuth';
import { UserService } from '@services/user.service';
import { EMPTY, catchError } from 'rxjs';
import { AlertEnum } from 'src/app/components/organisms/alert-notification/alertEnum';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
})
export class LoginComponent {
	alertStyle!: AlertEnum;
	alertNotificationVisible = false;
	alertText!: string;

	openAlertNotification = () =>  this.alertNotificationVisible = true;
	closeAlertNotification = () => this.alertNotificationVisible = false;

	constructor(private userService: UserService, private router: Router) {}

	login($event: { finishRequest: () => void, auth: IAuth }) {
		this.userService.authUser($event.auth).
			pipe(
				catchError((request) => {
					this.errorHandle(request.error.error);
					return EMPTY;
				})
			).subscribe({
				next: (response: IAuthResponse) => {
					localStorage.setItem('username', response.username);
					
					this.router.navigate(['/Home']);
				},
				complete: () => $event.finishRequest()
			});
	}

	private errorHandle(error: string) {
		switch(error) {
		case 'Incorrect email or password!': {
			this.startAlertNotification('E-mail ou senha incorretos!', AlertEnum.ALERT);
			break;
		}
		default: {
			this.startAlertNotification('Não foi possível efetuar o login, tente novamente mais tarde', AlertEnum.CRITICAL);
			break;
		}
		}
	}

	private startAlertNotification(text: string, status: AlertEnum) {
		this.alertText = text;
		this.alertStyle = status;

		this.openAlertNotification();
	}
}
