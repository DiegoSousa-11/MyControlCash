import { NgModule } from '@angular/core';
import { TemplateChartComponent } from './templates/template-chart/template-chart.component';
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [
		TemplateChartComponent
	],
	imports: [
		CommonModule
	],
	exports: [
		TemplateChartComponent
	]
})

export class SharedModule {}