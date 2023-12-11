import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITabs } from '../models/ITabs';

@Injectable({
	providedIn: 'root',
})
export class MenuService {
	constructor(private http: HttpClient) {}

	getMenus():Observable<ITabs> {
		return this.http.get<ITabs>('../../assets/mocks/tabs.json');
	}
}
