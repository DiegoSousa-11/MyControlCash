import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AtomsModule } from '../atoms/atoms.module';
import { MoleculesModule } from '../molecules/molecules.module';
import { SharedModule } from '../shared.module';
import { AlertNotificationComponent } from './alert-notification/alert-notification.component';
import { AnnualBalanceChartComponent } from './annualBalanceChart/annualBalanceChart.component';
import { BalanceControllerComponent } from './balance-controller/balance-controller.component';
import { DashboardResumeComponent } from './dashboard-resume/dashboard-resume.component';
import { DataFilterComponent } from './data-filter/data-filter.component';
import { HeaderComponent } from './header/header.component';
import { LastOperationComponent } from './last-operation/last-operation.component';
import { PaymentsAndExpensesChartComponent } from './paymentsAndExpensesChart/paymentsAndExpensesChart.component';
import { ProfitChartComponent } from './profit-chart/profit-chart.component';
import { SignInFormComponent } from './sign-in-form/sign-in-form.component';
import { FormComponent } from './sign-up-form/sign-up-form.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { WelcomeMainComponent } from './welcome-main/welcome-main.component';

@NgModule({
	declarations: [
		AlertNotificationComponent,
		AnnualBalanceChartComponent,
		BalanceControllerComponent,
		DashboardResumeComponent,
		DataFilterComponent,
		HeaderComponent,
		LastOperationComponent,
		PaymentsAndExpensesChartComponent,
		ProfitChartComponent,
		SignInFormComponent,
		FormComponent,
		ToolBarComponent,
		WelcomeMainComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		RouterModule,
		ReactiveFormsModule,
		AtomsModule,
		MoleculesModule,
		SharedModule
	],
	exports: [
		AlertNotificationComponent,
		AnnualBalanceChartComponent,
		BalanceControllerComponent,
		DashboardResumeComponent,
		DataFilterComponent,
		HeaderComponent,
		LastOperationComponent,
		PaymentsAndExpensesChartComponent,
		ProfitChartComponent,
		SignInFormComponent,
		FormComponent,
		ToolBarComponent,
		WelcomeMainComponent
	],
})

export class OrganismsModule {}