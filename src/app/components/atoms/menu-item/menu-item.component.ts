import { Component, Input } from '@angular/core';
import { ITabs } from 'src/app/models/ITabs';

@Component({
	selector: 'atom-menu-item',
	templateUrl: './menu-item.component.html',
	styleUrls: ['./menu-item.component.css'],
})
export class MenuItemComponent {
	@Input() tab!: ITabs; 
}
