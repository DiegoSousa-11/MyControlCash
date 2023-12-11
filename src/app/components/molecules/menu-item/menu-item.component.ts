import { Component, Input } from '@angular/core';
import { ITab } from 'src/app/models/ITabs';

@Component({
	selector: 'molecule-menu-item',
	templateUrl: './menu-item.component.html',
	styleUrls: ['./menu-item.component.css'],
})
export class MenuItemComponent {
	@Input() tab!: ITab; 
}
