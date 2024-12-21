import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AtomsModule } from '@atoms/atoms.module';
import { BannerComponent } from '@molecules/banner/banner.component';
import { FooterDashboardComponent } from '@molecules/footer-dashboard/footer-dashboard.component';
import { HeaderBalanceComponent } from '@molecules/header-balance/header-balance.component';
import { IconButtonComponent } from '@molecules/icon-button/icon-button.component';
import { InputContainerComponent } from '@molecules/input-container/input-container.component';
import { MenuItemComponent } from '@molecules/menu-item/menu-item.component';
import { MenuComponent } from '@molecules/menu/menu.component';
import { MessageComponent } from '@molecules/message/message.component';
import { WelcomeHeaderComponent } from '@molecules/welcome-header/welcome-header.component';
import { SharedModule } from '../shared.module';
import { PaginationControllerComponent } from './pagination-controller/pagination-controller.component';
import { TutorialTooltipComponent } from './tutorial-tooltip/tutorial-tooltip.component';

@NgModule({
	declarations: [
		BannerComponent,
		FooterDashboardComponent,
		HeaderBalanceComponent,
		IconButtonComponent,
		InputContainerComponent,
		MenuItemComponent,
		MenuItemComponent,
		MenuComponent,
		MessageComponent,
		WelcomeHeaderComponent,
		PaginationControllerComponent,
  		TutorialTooltipComponent
	],
	imports: [
		CommonModule,
		RouterModule,
		AtomsModule,
		SharedModule
	],
	exports: [
		BannerComponent,
		FooterDashboardComponent,
		HeaderBalanceComponent,
		IconButtonComponent,
		InputContainerComponent,
		MenuItemComponent,
		MenuItemComponent,
		MenuComponent,
		MessageComponent,
		WelcomeHeaderComponent,
		PaginationControllerComponent,
		TutorialTooltipComponent
	]
})
export class MoleculesModule {}
