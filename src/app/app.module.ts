import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AtomsModule } from './components/atoms/atoms.module';
import { MoleculesModule } from './components/molecules/molecules.module';
import { OrganismsModule } from './components/organisms/organisms.module';
import { TemplatesModule } from './components/templates/templates.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { HomeModule } from './pages/home/home.module';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { StatementComponent } from './pages/statement/statement.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

@NgModule({
	declarations: [
		HomeComponent,
		DashboardComponent,
		StatementComponent,
		AppComponent,
		WelcomeComponent,
		SignUpComponent,
		LoginComponent,
		StatisticsComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		AtomsModule,
		MoleculesModule,
		OrganismsModule,
		TemplatesModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		HomeModule,
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
