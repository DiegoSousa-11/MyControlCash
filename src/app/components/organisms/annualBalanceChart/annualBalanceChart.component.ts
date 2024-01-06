import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
	selector: 'organism-annual-balance-chart',
	templateUrl: './annualBalanceChart.component.html',
	styleUrls: ['./annualBalanceChart.component.css'],
})
export class AnnualBalanceChartComponent { 
	chart: unknown;
	chartData: Array<number> = [65000, 59000, 80000, 81000, 56000, 55000, 65000, 80000, 81000, 56000, 60000];
	subtitle = [
		{
			text: 'Entradas',
			color: '#FFF',
		},
		{
			text: 'Saídas',
			color: 'var(--darkCyan)',
		},
	];

	ngOnInit(): void {
		this.createLineChart();
	}

	createLineChart() {
		this.chart = new Chart('barChart', {
			type: 'bar',
			data: {
				labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Set', 'Out', 'Nov', 'Dez'],
				datasets: [
					{
						data: this.chartData,
						backgroundColor: '#197756',
						label: 'Saídas',
						borderRadius: 100,
						categoryPercentage: .35
					},
					{
						data: this.chartData.map(item => {
							if(item % 2 === 0) {
								return item - (Math.random() * item);
							} else {
								return item + (Math.random() * item);
							}
						}),
						label: 'Entradas',
						backgroundColor: '#FFF',
						borderRadius: 100,
						categoryPercentage: .35
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
							maxTicksLimit: 8,
							callback: function(value) {
								return 'R$ ' + value;
							}
						},
						beginAtZero: true
					},
					x: {
						border: {
							width: 0
						},
						grid: {
							display: false
						},
					}
				}
			}
		});
	}
}
