import { Component, Input } from '@angular/core';

@Component({
	selector: 'atoms-progress-bar',
	templateUrl: './progress-bar.component.html',
	styleUrls: ['./progress-bar.component.css'],
})
export class ProgressBarComponent { 
	private _percent: number = 0;

	@Input() barColor!: string;
	@Input() set percent(value: number) {
		if (value >= 0 && value <= 100) {
			this._percent = value;
		} else {
			console.error('The bar percentage value must be between 0 and 100!');
		}
	}

	get percent(): string {
		return `${this._percent}%`;
	}
}
