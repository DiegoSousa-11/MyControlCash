import { Component, Input } from '@angular/core';
import { ITabs } from 'src/app/models/ITabs';

@Component({
	selector: 'molecule-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
	@Input() tabs!: ITabs[];

	setSelectedTab(tab: ITabs) {
		this.tabs.forEach((element) => element.isActive = false);
		tab.isActive = true;

		console.log(this.tabs);
	}
}
