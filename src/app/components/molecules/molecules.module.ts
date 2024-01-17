import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { BannerComponent } from './banner/banner.component';
import { FooterDashboardComponent } from './footer-dashboard/footer-dashboard.component';
import { HeaderBalanceComponent } from './header-balance/header-balance.component';
import { IconButtonComponent } from './icon-button/icon-button.component';
import { InputContainerComponent } from './input-container/input-container.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { MenuComponent } from './menu/menu.component';
import { MessageComponent } from './message/message.component';
import { WelcomeHeaderComponent } from './welcome-header/welcome-header.component';
import { AtomsModule } from '../atoms/atoms.module';
import { SharedModule } from '../shared.module';

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
		WelcomeHeaderComponent
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
		WelcomeHeaderComponent
	]
})
export class MoleculesModule {}
