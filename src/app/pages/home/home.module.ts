import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BearerTokenInterceptor } from 'src/app/interceptors/bearerToken.interceptor';
import { RefreshTokenInterceptor } from 'src/app/interceptors/refreshToken.interceptor';

@NgModule({
	declarations: [],
	imports: [
		CommonModule, 
		AppRoutingModule,
	],
	providers: [
		{ provide: HTTP_INTERCEPTORS, useClass: BearerTokenInterceptor, multi: true },
		{ provide: HTTP_INTERCEPTORS, useClass: RefreshTokenInterceptor, multi: true },
	]
})
export class HomeModule {}
