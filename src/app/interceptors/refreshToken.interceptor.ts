import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '@services/auth.service';
import { BehaviorSubject, Observable, catchError, filter, mergeMap, switchMap, throwError } from 'rxjs';

@Injectable()
export class RefreshTokenInterceptor implements HttpInterceptor {
	private refreshTokenInProgress: BehaviorSubject<boolean> = new BehaviorSubject(false);

	constructor(private authService: AuthService) {}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		return next.handle(request).pipe(
			catchError((error: HttpErrorResponse) => {
				if(error.error.error === 'Invalid token!' && !request.url.includes('/auth')) {
					if(!this.refreshTokenInProgress.getValue()) {
						this.refreshTokenInProgress.next(true);
						
						return this.authService.authSession().pipe(
							mergeMap(() => {
								this.refreshTokenInProgress.next(false);

								request = request.clone({
									setHeaders: {
										Authorization: `Bearer ${this.authService.getToken()}`
									}
								});

								return next.handle(request);
							})
						);
					} else {
						return this.refreshTokenInProgress.pipe(
							filter(refreshTokenInProgress => !refreshTokenInProgress),
							switchMap(() => {
								request = request.clone({
									setHeaders: {
										Authorization: `Bearer ${this.authService.getToken()}`
									}
								});

								return next.handle(request);
							})
						);
					}
				}
				
				return throwError(error);
			})
		);
	}
}