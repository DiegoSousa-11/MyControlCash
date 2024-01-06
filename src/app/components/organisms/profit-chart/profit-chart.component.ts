import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
	selector: 'organism-profit-chart',
	templateUrl: './profit-chart.component.html',
	styleUrls: ['./profit-chart.component.css'],
})
export class ProfitChartComponent implements OnInit { 
	chart: unknown;
	chartData: Array<number> = [65, 59, 80, 81, 56, 55, 65, 80, 81, 56, 60];
	profitResume: number = 2000;

	ngOnInit(): void {
		this.createLineChart();
	}
	
	createLineChart() {
		this.chart = new Chart('lineChart', {
			type: 'line',
			data: {
				labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Set', 'Out', 'Nov', 'Dez'],
				datasets: [
					{
						data: this.chartData,
						borderColor: '#FFF',
						tension: .4,
						fill: true,
						backgroundColor: (context) => {
							const background = ['#FFF', '#FFFFFF20'];
			
							if (!context.chart.chartArea) {
								return;
							}
			
							const { ctx, chartArea: { top, bottom } } = context.chart;
							const gradientBackground = ctx.createLinearGradient(0, top, 0, bottom);
							gradientBackground.addColorStop(0, background[0]);
							gradientBackground.addColorStop(1, background[1]);
			
							return gradientBackground;
						},
					},
				],
			},
			options: {
				responsive: true,
				maintainAspectRatio: false,
				scales: {
					y: {
						border: {
							width: 0
						},
						grid: {
							color: '#FFFFFF20',
							tickColor: '#FFFFFF20',
							
						},
						ticks: {
							maxTicksLimit: 7,
							callback: function(value) {
								return 'R$ ' + value + '   ';
							}
						},
						suggestedMin: Math.min(...this.chartData) - 10,
					},
					x: {
						border: {
							width: 0
						},
						grid: {
							color: '#FFFFFF20',
							tickColor: '#FFFFFF20'
						},
					}
				}
			}
		});
	}
}
