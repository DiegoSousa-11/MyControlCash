import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { alertStyles } from './alertStyles';

@Component({
	selector: 'organism-alert-notification',
	templateUrl: './alert-notification.component.html',
	styleUrls: ['./alert-notification.component.css'],
})
export class AlertNotificationComponent implements OnInit, OnChanges { 
	barPercent: number = 0;

	@Input() onClose!: () => void;
	@Input() timeDuration: number = 5000;
	@Input() text!: string;
	@Input() status: 'GOOD' | 'ALERT' | 'CRITICAL' = 'GOOD';

	ngOnInit(): void {
		this.startCoutdown();
	}

	ngOnChanges(changes: SimpleChanges): void {
		if(changes?.['status'] || changes?.['text']) {
			this.barPercent = 0;
		}
	}

	private startCoutdown() {
		const coutdown = setInterval(() => {
			if(this.barPercent < 100) {
				this.barPercent++;
			} else {
				this.closeAlertNotification(coutdown);
			}
		}, this.intervalTime);
	}

	private closeAlertNotification(coutdown: ReturnType<typeof setInterval>) {
		clearInterval(coutdown);
		this.onClose();
	}

	get intervalTime(): number {
		return this.timeDuration/100;
	}

	get style() {
		return alertStyles[this.status];
	}
}
