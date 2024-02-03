import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IOperations } from '@models/IOperation';
import { IStatementQueryParams } from '@models/IStatementParams';
import { baseUrl } from '../environments/baseUrl';
import { getCleanQuery } from '../utils/getCleanQuery';

@Injectable({
	providedIn: 'root',
})
export class StatementService {
	constructor(private http: HttpClient) {}

	getStatement(payload: IStatementQueryParams) {
		const query = getCleanQuery(`search=${payload.search}&type=${payload.type}&startDate=${payload.startDate}&limit=${payload.limit}&endDate=${payload.endDate}&page=${payload.page}`);

		return this.http.get<IOperations>(`${baseUrl}/transaction/statement?${query}`);
	}
}
