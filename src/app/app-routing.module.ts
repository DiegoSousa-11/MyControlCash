import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { StatementComponent } from './pages/statement/statement.component';

const routes: Routes = [
	{
		path: '',
		component: WelcomeComponent,
	},
	{
		path: 'SignUp',
		component: SignUpComponent,
	},
	{
		path: 'Login',
		component: LoginComponent,
	},
	{
		path: 'Home',
		component: HomeComponent,
		children: [
			{
				path: '',
				component: DashboardComponent
			},
			{
				path: 'Statement',
				component: StatementComponent
			}
		]
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
