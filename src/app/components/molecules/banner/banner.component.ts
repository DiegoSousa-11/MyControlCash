import { Component, Input } from '@angular/core';

@Component({
	selector: 'molecule-banner',
	templateUrl: './banner.component.html',
	styleUrls: ['./banner.component.css'],
})
export class BannerComponent {
	@Input() title!: string;
	@Input() description!: string;
	@Input() imageURL!: string;
	@Input() imageAlt!: string;
	@Input() position!: 'left' | 'right'; 
}
