import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'molecule-pagination-controller',
	templateUrl: './pagination-controller.component.html',
	styleUrls: ['./pagination-controller.component.css']
})
export class PaginationControllerComponent {
    @Input() pagesQuantity!: number;
	@Input() currentPage!: number;

	@Output() changePageEvent: EventEmitter<number> = new EventEmitter();

	changePage(page: number) {
		if(page <= this.pagesQuantity && page >= 1 && page !== this.currentPage) {
			this.changePageEvent.emit(page);
		}
	}
}
