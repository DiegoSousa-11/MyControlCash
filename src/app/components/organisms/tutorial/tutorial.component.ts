import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, Inject, Injector, ViewContainerRef } from '@angular/core';
import { TutorialTooltipComponent } from '@molecules/tutorial-tooltip/tutorial-tooltip.component';

interface Script {
	idElement: string;
	timeDuration: number;
	tooltipPosition: 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-right' | 'bottom-left';
	text: string;
	tooltipWidth?: string;
};

@Component({
	selector: 'organism-tutorial',
	templateUrl: './tutorial.component.html',
	styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements AfterViewInit {
	private readonly MARGIN_TOOLTIP = 24;

	tutorialHasActive: boolean = true;

	constructor(
		@Inject(DOCUMENT) private document: Document,
		private viewContainerRef: ViewContainerRef,
		private injector: Injector
	) {}

	script: Array<Script> = [
		// {
		// 	idElement: 'mcc-header',
		// 	timeDuration: 5,
		// 	tooltipPosition: 'bottom',
		// 	text: 'Aqui você pode selecionar qual aba você deseja acessar',
		// 	tooltipWidth: '300px'
		// },
		{
			idElement: 'mcc-menu',
			timeDuration: 5,
			tooltipPosition: 'bottom-right',
			text: 'Aqui você pode selecionar qual aba você deseja acessar',
			tooltipWidth: '300px'
		},
		{
			idElement: 'mcc-last-payment',
			timeDuration: 5,
			tooltipPosition: 'top',
			text: 'Aqui você pode visualizar seu último pagamento',
			tooltipWidth: '300px'
		}
	];

    ngAfterViewInit(): void {
		if(this.tutorialHasActive) {
			setTimeout(() => this.scheduleFrames(), 2000);
		}
    }

	scheduleFrames(): void {
		this.script.forEach((item, index) => {
			this.setTransitionSteps(item.idElement);

			const timeDurationInSeconds = item.timeDuration * 1000;
			const delay = index * timeDurationInSeconds;

			setTimeout(() => {
				this.setNextStep(item);
			}, delay);

			if(index === this.script.length - 1) {
				setTimeout(() => {
					this.clearTutorialStyling();
				}, 8_000);
			}
		});
	}

	setTransitionSteps(idElement: string) {
		const element = this.document.getElementById(idElement);

		if(element) {
			element.style.transition = 'all 0.5s ease'; 
		}
	}

	setNextStep(item: Script): void {
		const element = this.document.getElementById(item.idElement);

		if(!element) {
			return;
		}

		element.style.position = 'relative';
		element.style.backgroundColor = 'white';
		element.style.pointerEvents = 'none';
		element.style.borderRadius = '8px';

		this.setElementTooltip(item);
	}

	setElementTooltip(item: Script) {
		const element = this.document.getElementById(item.idElement);

		if(!element) {
			return;
		}

		const elementRect = element.getBoundingClientRect();

		const componentRef = this.viewContainerRef.createComponent(TutorialTooltipComponent, { injector: this.injector });

		componentRef.setInput('text', item.text);
		componentRef.setInput('position', item.tooltipPosition);
		componentRef.setInput('targetId', item.idElement);
		
		element.appendChild(componentRef.location.nativeElement);

		const tooltipElement = componentRef.location.nativeElement;
		if(item.tooltipWidth) {
			tooltipElement.style.width = item.tooltipWidth;
		} else {
			tooltipElement.style.width = elementRect.width;
		}
	}

	clearTutorialStyling() {
		this.tutorialHasActive = false;

		this.script.forEach((item) => {
			this.removeElementStyle(item);
			this.removeAllTooltips();
		});
	}

	removeElementStyle(item: Script) {
		const element = this.document.getElementById(item.idElement);
		console.log(element);

		element?.style.removeProperty("position");
		element?.style.removeProperty("background-color");
		element?.style.removeProperty("pointer-events");
		element?.style.removeProperty("border-radius");
	}

	removeAllTooltips() {
		const elements = document.getElementsByTagName('molecule-tutorial-tooltip');
		const elementsArray = Array.from(elements);
		elementsArray.forEach(element => element.remove());
	}
}
