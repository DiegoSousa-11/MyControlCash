import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/atoms/button/button.component';
import { LoaderComponent } from './components/atoms/loader/loader.component';
import { ProgressBarComponent } from './components/atoms/progress-bar/progress-bar.component';
import { UserBalanceComponent } from './components/atoms/user-balance/user-balance.component';
import { BannerComponent } from './components/molecules/banner/banner.component';
import { FooterDashboardComponent } from './components/molecules/footer-dashboard/footer-dashboard.component';
import { HeaderBalanceComponent } from './components/molecules/header-balance/header-balance.component';
import { IconButtonComponent } from './components/molecules/icon-button/icon-button.component';
import { InputContainerComponent } from './components/molecules/input-container/input-container.component';
import { MenuItemComponent } from './components/molecules/menu-item/menu-item.component';
import { MenuComponent } from './components/molecules/menu/menu.component';
import { MessageComponent } from './components/molecules/message/message.component';
import { WelcomeHeaderComponent } from './components/molecules/welcome-header/welcome-header.component';
import { AlertNotificationComponent } from './components/organisms/alert-notification/alert-notification.component';
import { AnnualBalanceChartComponent } from './components/organisms/annualBalanceChart/annualBalanceChart.component';
import { BalanceControllerComponent } from './components/organisms/balance-controller/balance-controller.component';
import { DashboardResumeComponent } from './components/organisms/dashboard-resume/dashboard-resume.component';
import { DataFilterComponent } from './components/organisms/data-filter/data-filter.component';
import { HeaderComponent } from './components/organisms/header/header.component';
import { LastOperationComponent } from './components/organisms/last-operation/last-operation.component';
import { PaymentsAndExpensesChartComponent } from './components/organisms/paymentsAndExpensesChart/paymentsAndExpensesChart.component';
import { ProfitChartComponent } from './components/organisms/profit-chart/profit-chart.component';
import { SignInFormComponent } from './components/organisms/sign-in-form/sign-in-form.component';
import { FormComponent } from './components/organisms/sign-up-form/sign-up-form.component';
import { ToolBarComponent } from './components/organisms/tool-bar/tool-bar.component';
import { WelcomeMainComponent } from './components/organisms/welcome-main/welcome-main.component';
import { FormsTemplateComponent } from './components/templates/forms-template/forms-template.component';
import { StatementTemplateComponent } from './components/templates/statement-template/statement-template.component';
import { TemplateChartComponent } from './components/templates/template-chart/template-chart.component';
import { TemplateMainDashboardComponent } from './components/templates/template-main-dashboard/template-main-dashboard.component';
import { TemplateMainDefaultComponent } from './components/templates/template-main-default/template-main-default.component';
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
		MenuItemComponent,
		MenuComponent,
		HeaderComponent,
		DashboardComponent,
		IconButtonComponent,
		StatementComponent,
		TemplateMainDashboardComponent,
		HeaderBalanceComponent,
		UserBalanceComponent,
		FooterDashboardComponent,
		BalanceControllerComponent,
		LastOperationComponent,
		DashboardResumeComponent,
		StatementTemplateComponent,
		AppComponent,
		WelcomeComponent,
		WelcomeMainComponent,
		SignUpComponent,
		FormComponent,
		ButtonComponent,
		BannerComponent,
		FormsTemplateComponent,
		WelcomeHeaderComponent,
		MessageComponent,
		InputContainerComponent,
		SignInFormComponent,
		LoginComponent,
		TemplateMainDefaultComponent,
		ToolBarComponent,
		DataFilterComponent,
		StatisticsComponent,
		PaymentsAndExpensesChartComponent,
		TemplateChartComponent,
		ProfitChartComponent,
		AnnualBalanceChartComponent,
		LoaderComponent,
		AlertNotificationComponent,
		ProgressBarComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		HomeModule
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
