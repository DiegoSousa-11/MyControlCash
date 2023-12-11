import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IOperations } from '../models/IOperation';

@Injectable({
	providedIn: 'root',
})
export class StatementService {
	constructor(private http: HttpClient) {}

	getStatement() {
		return this.http.get<IOperations>('../../assets/mocks/operations.json');
	}
}
