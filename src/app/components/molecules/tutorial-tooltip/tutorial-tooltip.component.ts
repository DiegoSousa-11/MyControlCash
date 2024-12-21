import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, Input } from '@angular/core';

@Component({
    selector: 'molecule-tutorial-tooltip',
    templateUrl: './tutorial-tooltip.component.html',
    styleUrls: ['./tutorial-tooltip.component.css']
})
export class TutorialTooltipComponent implements AfterViewInit {
    private readonly MARGIN_TOOLTIP = 24;

    @Input() text!: string;
    @Input() position!: 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-right' | 'bottom-left';
    @Input() targetId!: string;
    @Input() width?: string;

    setTooltipPositionHandle: Record<'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-right' | 'bottom-left', (elementRect: DOMRect) => void> = {
        "top": this.setTooltipPositionToTop.bind(this),
        "top-left": this.setTooltipPositionToTopLeft.bind(this),
        "top-right": this.setTooltipPositionToTopRight.bind(this),
        "bottom": this.setTooltipPositionToBottom.bind(this),
        "bottom-left": this.setTooltipPositionToBottomLeft.bind(this),
        "bottom-right": this.setTooltipPositionToBottomRight.bind(this),
        "left": this.setTooltipPositionToLeft.bind(this),
        "right": this.setTooltipPositionToRight.bind(this),
    };

    constructor(
        @Inject(DOCUMENT) private document: Document,
        private elementRef: ElementRef
    ) {}

    ngAfterViewInit(): void {
        this.setPositionTooltip();
    }

    setPositionTooltip(): void {
        const element = this.document.getElementById(this.targetId);
        
        if(!element) {
            return;
        }

        const elementRect = element.getBoundingClientRect();

        this.setTooltipPositionHandle[this.position](elementRect);
    }

    private setTooltipPositionToTop(elementRect: DOMRect) {
        this.elementRef.nativeElement.style.transform = `
            translate(${(elementRect.width - this.elementRef.nativeElement.offsetWidth)/2}px, -${elementRect.height + this.elementRef.nativeElement.offsetHeight + this.MARGIN_TOOLTIP}px)
        `;
    }

    private setTooltipPositionToBottom(elementRect: DOMRect) {
        this.elementRef.nativeElement.style.transform = `translate(${(elementRect.width - this.elementRef.nativeElement.offsetWidth)/2}px, ${this.MARGIN_TOOLTIP}px)`
    }

    private setTooltipPositionToTopRight(elementRect: DOMRect) {
        this.elementRef.nativeElement.style.left = `${elementRect.right + this.MARGIN_TOOLTIP}px`;
        let tooltipTop = elementRect.top - this.elementRef.nativeElement.offsetHeight;

        if(tooltipTop < 0) {
            tooltipTop = this.MARGIN_TOOLTIP;
        }

        this.elementRef.nativeElement.style.top = `${tooltipTop}px`;
    }

    private setTooltipPositionToTopLeft(elementRect: DOMRect) {
        this.elementRef.nativeElement.style.left  = `${elementRect.left - this.elementRef.nativeElement.offsetWidth}px`;
		this.elementRef.nativeElement.style.top = `${elementRect.top - this.elementRef.nativeElement.offsetHeight}px`;
    }

    private setTooltipPositionToBottomRight(elementRect: DOMRect) {
        let tooltipLeft = elementRect.right + this.MARGIN_TOOLTIP;

        if((tooltipLeft + this.elementRef.nativeElement.offsetWidth) > window.innerWidth) {
            tooltipLeft = elementRect.right - this.elementRef.nativeElement.offsetWidth - this.MARGIN_TOOLTIP;
        }

        this.elementRef.nativeElement.style.left = `${tooltipLeft}px`;
    
        let tooltipTop = elementRect.top + elementRect.height;

        if((tooltipTop + this.elementRef.nativeElement.offsetHeight) > window.innerHeight) {
            tooltipTop = elementRect.height - this.elementRef.nativeElement.offsetHeight - this.MARGIN_TOOLTIP;
        }

        this.elementRef.nativeElement.style.top = `${tooltipTop}px`;
    }

    private setTooltipPositionToBottomLeft(elementRect: DOMRect) {
        let tooltipLeft = elementRect.left - this.elementRef.nativeElement.offsetWidth;

        if(tooltipLeft < 0) {
            tooltipLeft = this.MARGIN_TOOLTIP;
        }

        this.elementRef.nativeElement.style.left  = `${tooltipLeft}px`;
        this.elementRef.nativeElement.style.top = `${elementRect.top + elementRect.height}px`;
    }

    private setTooltipPositionToLeft(elementRect: DOMRect) {
        this.elementRef.nativeElement.style.left  = `${elementRect.left - this.elementRef.nativeElement.offsetWidth - this.MARGIN_TOOLTIP}px`;
		this.elementRef.nativeElement.style.top = `${elementRect.top + ((elementRect.height - this.elementRef.nativeElement.offsetHeight)/2)}px`;
    }

    private setTooltipPositionToRight(elementRect: DOMRect) {
        this.elementRef.nativeElement.style.left = `${elementRect.right + this.MARGIN_TOOLTIP}px`;
		this.elementRef.nativeElement.style.top = `${elementRect.top + ((elementRect.height - this.elementRef.nativeElement.offsetHeight)/2)}px`;
    }
}
