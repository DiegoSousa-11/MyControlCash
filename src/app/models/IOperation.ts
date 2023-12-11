export interface IOperation {
	id: string;
	date: Date;
	name: string;
	type: 'PAYMENT' | 'EXPENSE';
	value: number;
}

export interface IOperations extends Array<IOperation> {}