import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'sign-up-form',
	templateUrl: './sign-up-form.component.html',
	styleUrls: ['./sign-up-form.component.css'],
})
export class FormComponent implements OnInit {
	signUpForm!: FormGroup;

	constructor(private formBuilder: FormBuilder) {}

	ngOnInit(): void {
		this.signUpForm = this.formBuilder.group({
			name: ['', [Validators.required]],
			email: ['', [Validators.required, Validators.email]],
			patrimony: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
			password: ['', [Validators.required, Validators.minLength(8)]],
			confimPassword: ['', [Validators.required, Validators.minLength(8)]],
		});
	}
}