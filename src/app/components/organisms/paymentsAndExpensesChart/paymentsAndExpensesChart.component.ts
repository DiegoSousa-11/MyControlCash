import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
	selector: 'organism-payments-and-expenses-chart',
	templateUrl: './paymentsAndExpensesChart.component.html',
	styleUrls: ['./paymentsAndExpensesChart.component.css'],
})
export class PaymentsAndExpensesChartComponent implements OnInit {
	chart: unknown;
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
		this.createDoughnutChart();
	}

	createDoughnutChart() {
		this.chart = new Chart('doughnutChart', {
			type: 'doughnut',
			data: {
				datasets: [
					{
						data: [350, 100],
						backgroundColor: ['#FFF', '#197756'],
						borderWidth: 0,
					},
				],
			},
			options: {
				cutout: '65%'
			}
		});
	}
}
