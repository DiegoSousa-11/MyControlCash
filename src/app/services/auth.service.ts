import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, catchError } from 'rxjs';
import { baseUrl } from '../environments/baseUrl';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	constructor(private http: HttpClient) {}

	authSession() {
		return new Observable((subscriber) => {
			const username = localStorage.getItem('username');

			if(!username) {
				subscriber.error('User not authenticated!');
			}

			this.refreshToken().pipe(
				catchError(() => {
					subscriber.error('User not authenticated!');
					return EMPTY;
				})
			).subscribe({
				next: (request) => {
					subscriber.next();
					this.createSession(request.token);
				},
				complete: () => subscriber.complete()
			});
		});
	}

	refreshToken(): Observable<{ token: string }> {
		return this.http.post<{ token: string }>(`${baseUrl}/auth/refreshToken`, {}, {
			withCredentials: true
		});
	}

	getToken(): string | null {
		return sessionStorage.getItem('token');
	}

	private createSession(token: string) {
		sessionStorage.setItem('token', token);
	}
}