import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IUser } from 'src/app/models/IUser';

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
			name: ['', [Validators.required]],
			email: ['', [Validators.required, Validators.email]],
			patrimony: ['', [Validators.pattern('^[0-9]*$')]],
			password: ['', [Validators.required, Validators.minLength(8)]],
			confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
		}, {
			validators: [this.passwordsAreEquals, this.anyInputNotFilled]
		});
	}

	private anyInputNotFilled(form: FormGroup): { anyInputNotFilled: boolean } | null {
		for(const controlName in form.controls) {
			const control = form.get(controlName);

			if (control && control.errors?.['required'] && control.value.length < 1) {
				return { anyInputNotFilled: true };
			}
		}

		return null;
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
