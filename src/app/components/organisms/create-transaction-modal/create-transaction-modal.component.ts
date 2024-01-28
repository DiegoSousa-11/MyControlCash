import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControlOptions, FormGroup, Validators } from '@angular/forms';
import { IOperation } from '@models/IOperation';
import { checkIfAnyInputNotFilled } from 'src/app/utils/checkIfAnyInputNotFilled';

@Component({
	selector: 'organism-create-transaction-modal',
	templateUrl: './create-transaction-modal.component.html',
	styleUrls: ['./create-transaction-modal.component.css']
})
export class CreateTransactionModalComponent implements OnInit{
	@Output() createTransactionEmmit: EventEmitter<{ finishRequest: () => void; transaction: IOperation }> = new EventEmitter();

    @Input() onClose!: () => void;
	@Input() transactionType!: IOperation['type'];

	createTransactionForm!: FormGroup;
	isLoading: boolean = false;

	constructor(private formBuilder: FormBuilder) {}

	ngOnInit(): void {
		this.createTransactionForm = this.formBuilder.group({
			name: [null, Validators.required],
			amount: [null, Validators.required],
		}, {
			validators: [this.amountGreaterThanZero, checkIfAnyInputNotFilled]
		} as FormControlOptions);
	}

	createTransaction() {
		this.markAllInputAsTouched();

		if(this.createTransactionForm.valid) {
			this.enableLoading();
			
			const transaction = {
				name: this.createTransactionForm.get('name')?.value,
				amount: this.createTransactionForm.get('amount')?.value,
				type: this.transactionType
			};

			this.createTransactionEmmit.emit({ finishRequest: this.disableLoading.bind(this), transaction });
		}
	}

	private amountGreaterThanZero(form: FormGroup): { amountGreaterThanZero: boolean } | null  {
		const amount = form.get('amount')?.value;

		if(amount > 0) {
			return null;
		}

		return { amountGreaterThanZero: true };
	}

	private markAllInputAsTouched() {
		this.createTransactionForm.markAllAsTouched();
		console.log(this.createTransactionForm.errors);
	}

	private enableLoading() {
		this.isLoading = true;
	}

	private disableLoading() {
		this.isLoading = false;
	}
}
