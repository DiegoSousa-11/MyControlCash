import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITabs } from '@models/ITabs';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class MenuService {
	constructor(private http: HttpClient) {}

	getMenus():Observable<ITabs> {
		return this.http.get<ITabs>('../../assets/mocks/tabs.json');
	}
}
