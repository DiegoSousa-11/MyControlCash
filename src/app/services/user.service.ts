import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAuth, IAuthResponse } from '@models/IAuth';
import { IUser } from '@models/IUser';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class UserService {
	constructor(private http: HttpClient) {}

	createUser(user: IUser) {
		return this.http.post('http://localhost:9000/user', user);
	}

	authUser(auth: IAuth): Observable<IAuthResponse> {
		return this.http.post<IAuthResponse>('http://localhost:9000/user/auth', auth, {
			withCredentials: true
		});
	}
}
