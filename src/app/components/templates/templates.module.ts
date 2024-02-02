import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AtomsModule } from '@atoms/atoms.module';
import { OrganismsModule } from '@organisms/organisms.module';
import { FormsTemplateComponent } from '@templates/forms-template/forms-template.component';
import { StatementTemplateComponent } from '@templates/statement-template/statement-template.component';
import { TemplateMainDashboardComponent } from '@templates/template-main-dashboard/template-main-dashboard.component';
import { TemplateMainDefaultComponent } from '@templates/template-main-default/template-main-default.component';
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
		AtomsModule,
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