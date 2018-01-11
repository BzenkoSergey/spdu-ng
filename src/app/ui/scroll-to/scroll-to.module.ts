import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ScrollToDirective } from './scroll-to.directive';

@NgModule({
	imports: [
		BrowserModule
	],
	declarations: [
		ScrollToDirective
	],
	exports: [
		ScrollToDirective
	]
})

export class ScrollToModule {}
