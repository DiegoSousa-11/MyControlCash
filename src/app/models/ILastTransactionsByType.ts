export interface ILastTransactionByType {
	lastPayment: LastTransactionData;
	lastExpense: LastTransactionData;
}

type LastTransactionData = {
	amount: number;
	percent: number;
}