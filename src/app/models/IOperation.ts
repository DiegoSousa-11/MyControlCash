export interface IOperation {
	id: string;
	createdDate: Date;
	name: string;
	type: 'PAYMENT' | 'EXPENSE';
	amount: number;
}

export interface IOperations extends Array<IOperation> {}