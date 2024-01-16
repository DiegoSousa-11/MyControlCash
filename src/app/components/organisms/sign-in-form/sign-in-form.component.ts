import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControlOptions, FormGroup, Validators } from '@angular/forms';
import { IAuth } from '@models/IAuth';
import { checkIfAnyInputNotFilled } from 'src/app/utils/checkIfAnyInputNotFilled';

@Component({
	selector: 'sign-in-form',
	templateUrl: './sign-in-form.component.html',
	styleUrls: ['./sign-in-form.component.css'],
})
export class SignInFormComponent {
	@Output() resgisterEvent: EventEmitter<{ finishRequest: () => void; auth: IAuth }> = new EventEmitter();

	isLoading: boolean = false;
	singInForm!: FormGroup;

	constructor(private formBuilder: FormBuilder) {}

	ngOnInit(): void {
		this.singInForm = this.formBuilder.group({
			email: [null, [Validators.required, Validators.email]],
			password: [null, [Validators.required, Validators.minLength(8)]],
		}, {
			validators: [checkIfAnyInputNotFilled]
		} as FormControlOptions);
	}

	private markAllInputAsTouched() {
		this.singInForm.markAllAsTouched();
	}

	signInButton() {
		this.markAllInputAsTouched();

		if(this.singInForm.valid) {
			this.enableLoading();

			const user = {
				email: this.singInForm.get('email')?.value,
				password: this.singInForm.get('password')?.value,
			};

			this.resgisterEvent.emit({ finishRequest: this.disableLoading.bind(this), auth: user });
		}
	}

	private enableLoading() {
		this.isLoading = true;
	}

	private disableLoading() {
		this.isLoading = false;
	}
}
