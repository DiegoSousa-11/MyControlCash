import { IOperation } from './IOperation';

export interface IStatementQueryParams {
	startDate: string;
	endDate: string;
	page?: number;
	limit?: number;
	type?: IOperation['type'];
	search?: string;
}