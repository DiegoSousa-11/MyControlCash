import { FormGroup } from '@angular/forms';

export function passwordsAreEquals(form: FormGroup): { passwordsAreNotEquals: boolean } | null {
	const password = form.get('password')?.value;
	const confirmPassword = form.get('confirmPassword')?.value;

	if(password !== confirmPassword) {
		return { passwordsAreNotEquals: true };
	}

	return null;
}