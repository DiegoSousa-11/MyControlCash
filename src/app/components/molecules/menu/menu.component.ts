import { Component, Input, SimpleChanges } from '@angular/core';
import { ITabs } from 'src/app/models/ITabs';

@Component({
	selector: 'molecule-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
	@Input() tabs!: ITabs;
	@Input() currentPath: string | undefined;

	ngOnChanges(changes: SimpleChanges): void {
		if(changes?.['currentPath']) {
			this.tabs.map((item) => {
				if(item.path === this.currentPath) {
					item.isActive = true;
				} else {
					item.isActive = false;
				}
			});
		}
	}
}
