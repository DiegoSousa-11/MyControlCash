import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsTemplateComponent } from './forms-template/forms-template.component';
import { StatementTemplateComponent } from './statement-template/statement-template.component';
import { TemplateMainDashboardComponent } from './template-main-dashboard/template-main-dashboard.component';
import { TemplateMainDefaultComponent } from './template-main-default/template-main-default.component';
import { OrganismsModule } from '../organisms/organisms.module';
import { SharedModule } from '../shared.module';

@NgModule({
	declarations: [
		FormsTemplateComponent,
		StatementTemplateComponent,
		TemplateMainDashboardComponent,
		TemplateMainDefaultComponent
	],
	imports: [
		CommonModule,
		OrganismsModule,
		SharedModule
	],
	exports: [
		FormsTemplateComponent,
		StatementTemplateComponent,
		TemplateMainDashboardComponent,
		TemplateMainDefaultComponent
	],
})

export class TemplatesModule {}