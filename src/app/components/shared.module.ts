import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ModalTemplateComponent } from '@templates/modal-template/modal-template.component';
import { TemplateChartComponent } from '@templates/template-chart/template-chart.component';

@NgModule({
	declarations: [
		TemplateChartComponent,
		ModalTemplateComponent
	],
	imports: [
		CommonModule
	],
	exports: [
		TemplateChartComponent,
		ModalTemplateComponent
	]
})

export class SharedModule {}