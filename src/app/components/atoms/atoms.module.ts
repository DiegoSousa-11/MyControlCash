import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonComponent } from './button/button.component';
import { LoaderComponent } from './loader/loader.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { UserBalanceComponent } from './user-balance/user-balance.component';

@NgModule({
	declarations: [
		ButtonComponent,
		LoaderComponent,
		ProgressBarComponent,
		UserBalanceComponent
	],
	imports: [
		CommonModule
	],
	exports: [
		ButtonComponent,
		LoaderComponent,
		ProgressBarComponent,
		UserBalanceComponent
	],
})
export class AtomsModule {}
