import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControlOptions, FormGroup, Validators } from '@angular/forms';
import { IUser } from '@models/IUser';
import { checkIfAnyInputNotFilled } from 'src/app/utils/checkIfAnyInputNotFilled';

@Component({
	selector: 'sign-up-form',
	templateUrl: './sign-up-form.component.html',
	styleUrls: ['./sign-up-form.component.css'],
})
export class FormComponent implements OnInit {
	@Output() resgisterEvent: EventEmitter<{ finishRequest: () => void; user: IUser }> = new EventEmitter();

	signUpForm!: FormGroup;
	isLoading: boolean = false;

	constructor(private formBuilder: FormBuilder) {}

	ngOnInit(): void {
		this.signUpForm = this.formBuilder.group({
			name: [null, [Validators.required]],
			email: [null, [Validators.required, Validators.email]],
			patrimony: [null, [Validators.pattern('^[0-9]*$')]],
			password: [null, [Validators.required, Validators.minLength(8)]],
			confirmPassword: [null, [Validators.required, Validators.minLength(8)]],
		}, {
			validators: [this.passwordsAreEquals, checkIfAnyInputNotFilled]
		} as FormControlOptions);
	}

	private passwordsAreEquals(form: FormGroup): { passwordsAreNotEquals: boolean } | null {
		const password = form.get('password')?.value;
		const confirmPassword = form.get('confirmPassword')?.value;

		if(password !== confirmPassword) {
			return { passwordsAreNotEquals: true };
		}

		return null;
	}

	private markAllInputAsTouched() {
		this.signUpForm.markAllAsTouched();
	}

	registerButtonClick() {
		this.markAllInputAsTouched();

		if(this.signUpForm.valid) {
			this.enableLoading();

			const user = {
				username: this.signUpForm.get('name')?.value,
				email: this.signUpForm.get('email')?.value,
				patrimony: this.signUpForm.get('patrimony')?.value,
				password: this.signUpForm.get('password')?.value,
			};

			this.resgisterEvent.emit({ finishRequest: this.disableLoading.bind(this), user: user });
		}
	}

	private enableLoading() {
		this.isLoading = true;
	}

	private disableLoading() {
		this.isLoading = false;
	}
}
