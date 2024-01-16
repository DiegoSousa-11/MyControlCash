import { Component, Input } from '@angular/core';
import { ISubtitleChart } from '@models/ISubtitleChart';

@Component({
	selector: 'template-chart',
	templateUrl: './template-chart.component.html',
	styleUrls: ['./template-chart.component.css'],
})
export class TemplateChartComponent { 
	@Input() title!: string;
	@Input() subtitleOptions?: ISubtitleChart;
	@Input() alignCenter?: boolean = true;
}
