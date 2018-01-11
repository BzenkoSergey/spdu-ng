import { Directive, ElementRef } from '@angular/core';

@Directive({
	selector: '[appScrollTo]'
})

export class ScrollToDirective {
	constructor(private el: ElementRef) {}

	scroll() {
		this.el.nativeElement.scrollIntoView(false);
	}
}
