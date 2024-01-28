import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILastTransactionByType } from '@models/ILastTransactionsByType';
import { IOperation } from '@models/IOperation';
import { Observable } from 'rxjs';
import { baseUrl } from '../environments/baseUrl';

@Injectable({
	providedIn: 'root'
})
export class TransactionService {
	constructor(private http: HttpClient) {}

	getLastUserTransactionsByType(): Observable<ILastTransactionByType> {
		return this.http.get<ILastTransactionByType>(`${baseUrl}/transaction/lastTransactionByType`);
	}

	createTransaction(operation: IOperation) {
		return this.http.post(`${baseUrl}/transaction`, operation);
	}
}