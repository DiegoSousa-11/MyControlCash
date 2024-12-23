import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonComponent } from '@atoms/button/button.component';
import { LoaderComponent } from '@atoms/loader/loader.component';
import { ProgressBarComponent } from '@atoms/progress-bar/progress-bar.component';
import { UserBalanceComponent } from '@atoms/user-balance/user-balance.component';
import { SkeletonComponent } from './skeleton/skeleton.component';
import { CheckboxComponent } from './checkbox/checkbox.component';

@NgModule({
	declarations: [
		ButtonComponent,
		LoaderComponent,
		ProgressBarComponent,
		UserBalanceComponent,
		SkeletonComponent,
		CheckboxComponent
	],
	imports: [
		CommonModule
	],
	exports: [
		ButtonComponent,
		LoaderComponent,
		ProgressBarComponent,
		UserBalanceComponent,
		SkeletonComponent,
		CheckboxComponent
	],
})
export class AtomsModule {}
