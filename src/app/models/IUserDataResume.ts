import { IOperations } from './IOperation';

export interface IUserDataResume {
	patrimony: number;
	transactions: IOperations;
}