import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
	selector: 'app-statistics',
	templateUrl: './statistics.component.html',
	styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit{ 
	defaultFontOptions = {
		family: 'Poppins',
		size: 13
	};

	ngOnInit(): void {
		Chart.defaults.font = this.defaultFontOptions;
		Chart.defaults.color = '#FFF';
		Chart.defaults.plugins.legend.display = false;
	}
}
