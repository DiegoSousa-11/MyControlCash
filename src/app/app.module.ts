import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { WelcomeMainComponent } from './components/organisms/welcome-main/welcome-main.component';
import { ButtonComponent } from './components/atoms/button/button.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { FormComponent } from './components/organisms/sign-up-form/sign-up-form.component';
import { BannerComponent } from './components/molecules/banner/banner.component';
import { FormsTemplateComponent } from './components/templates/forms-template/forms-template.component';
import { WelcomeHeaderComponent } from './components/molecules/welcome-header/welcome-header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageComponent } from './components/atoms/message/message.component';
import { InputContainerComponent } from './components/atoms/input-container/input-container.component';
import { SignInFormComponent } from './components/organisms/sign-in-form/sign-in-form.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuItemComponent } from './components/atoms/menu-item/menu-item.component';
import { MenuComponent } from './components/molecules/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [
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
		HomeComponent,
		MenuItemComponent,
		MenuComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
