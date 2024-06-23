import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
	selector: 'modal-template',
	templateUrl: './modal-template.component.html',
	styleUrls: ['./modal-template.component.css']
})
export class ModalTemplateComponent implements AfterViewInit {
	@Input() justifyContent?: 'center' | 'flex-end' | 'flex-start';
	@Input() alignItems?: 'center' | 'flex-end' | 'flex-start';

	@Output() overlayClick: EventEmitter<void> = new EventEmitter<void>();

	@ViewChild('modalOverlay') modalOverlay!: ElementRef<HTMLDivElement>;

	ngAfterViewInit(): void {
		this.modalOverlay.nativeElement.addEventListener('click', (event) => {
			if(event.target === this.modalOverlay.nativeElement)
				this.overlayClick.emit();
		});
	}
}
