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
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		ReactiveFormsModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
