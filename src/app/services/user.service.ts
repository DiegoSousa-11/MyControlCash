import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAuth, IAuthResponse } from '@models/IAuth';
import { IUser } from '@models/IUser';
import { IUserDataResume } from '@models/IUserDataResume';
import { Observable } from 'rxjs';
import { baseUrl } from '../environments/baseUrl';

@Injectable({
	providedIn: 'root',
})
export class UserService {
	constructor(private http: HttpClient) {}

	createUser(user: IUser) {
		return this.http.post(`${baseUrl}/auth/createUser`, user);
	}

	authUser(auth: IAuth): Observable<IAuthResponse> {
		return this.http.post<IAuthResponse>(`${baseUrl}/auth`, auth, {
			withCredentials: true
		});
	}

	getUserDashDataResume() {
		return this.http.get<IUserDataResume>(`${baseUrl}/user/resume`);
	}
}
