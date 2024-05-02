import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, EMPTY, Observable, catchError } from 'rxjs';
import { baseUrl } from '../environments/baseUrl';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject(false);

	constructor(private http: HttpClient, private router: Router) {}

	authSession() {
		return new Observable((subscriber) => {
			const username = localStorage.getItem('username');

			if(!username) {
				this.logout().subscribe({
					next: () => {
						this.router.navigate(['']);
					},
					error: () => {
						this.router.navigate(['']);
					}
				});
			}

			this.refreshToken().pipe(
				catchError(() => {
					subscriber.error('User not authenticated!');

					this.logout().subscribe({
						next: () => {
							this.router.navigate(['']);
						},
						error: () => {
							this.router.navigate(['']);
						}
					});

					return EMPTY;
				})
			).subscribe({
				next: (request) => {
					this.createSession(request.token);
					subscriber.next();
				},
				complete: () => {
					subscriber.complete();

					if(!this.isAuthenticated.getValue()) {
						this.isAuthenticated.next(true);
					}
				}
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

	logout() {
		sessionStorage.clear();
		localStorage.clear();

		return this.http.delete(`${baseUrl}/auth/logout`, {
			withCredentials: true
		});
	}

	private createSession(token: string) {
		sessionStorage.setItem('token', token);
	}
}