import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AtomsModule } from '@atoms/atoms.module';
import { MoleculesModule } from '@molecules/molecules.module';
import { AlertNotificationComponent } from '@organisms/alert-notification/alert-notification.component';
import { AnnualBalanceChartComponent } from '@organisms/annualBalanceChart/annualBalanceChart.component';
import { BalanceControllerComponent } from '@organisms/balance-controller/balance-controller.component';
import { CreateTransactionModalComponent } from '@organisms/create-transaction-modal/create-transaction-modal.component';
import { DashboardResumeComponent } from '@organisms/dashboard-resume/dashboard-resume.component';
import { DataFilterComponent } from '@organisms/data-filter/data-filter.component';
import { HeaderComponent } from '@organisms/header/header.component';
import { LastOperationComponent } from '@organisms/last-operation/last-operation.component';
import { PaymentsAndExpensesChartComponent } from '@organisms/paymentsAndExpensesChart/paymentsAndExpensesChart.component';
import { ProfitChartComponent } from '@organisms/profit-chart/profit-chart.component';
import { SignInFormComponent } from '@organisms/sign-in-form/sign-in-form.component';
import { FormComponent } from '@organisms/sign-up-form/sign-up-form.component';
import { ToolBarComponent } from '@organisms/tool-bar/tool-bar.component';
import { WelcomeMainComponent } from '@organisms/welcome-main/welcome-main.component';
import { SharedModule } from '../shared.module';
import { MenuDropDownComponent } from './menu-drop-down/menu-drop-down.component';
import { MenuDropDownCheckboxComponent } from './menu-drop-down-checkbox/menu-drop-down-checkbox.component';

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
		WelcomeMainComponent,
		CreateTransactionModalComponent,
		MenuDropDownComponent,
		MenuDropDownCheckboxComponent
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
		WelcomeMainComponent,
		CreateTransactionModalComponent,
		MenuDropDownComponent
	],
})

export class OrganismsModule {}