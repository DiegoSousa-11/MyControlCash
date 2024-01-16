import { FormGroup } from '@angular/forms';

export function checkIfAnyInputNotFilled(form: FormGroup): { anyInputNotFilled: boolean } | null {
	for(const controlName in form.controls) {
		const control = form.get(controlName);

		if (control && control.errors?.['required'] && !control.value) {
			return { anyInputNotFilled: true };
		}
	}

	return null;
}