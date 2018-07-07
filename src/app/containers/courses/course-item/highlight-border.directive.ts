import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
    selector: '[appHighlightBorder]',
})
export class HighlightBorderDirective implements OnInit {
    @Input('appHighlightBorder') creationDate: Date;

    private currentDate: Date = new Date();
    private element: ElementRef;

    constructor(private el: ElementRef) {
        this.element = el;
    }

    ngOnInit() {
        this.element.nativeElement.style.border = '1px solid red';
        if (
            this.creationDate < this.currentDate &&
            this.creationDate >= new Date(new Date().setDate(new Date().getDate() - 14))
        ) {
            this.element.nativeElement.style.border = '1px solid #4CAF50';
        } else if (this.creationDate > this.currentDate) {
            this.element.nativeElement.style.border = '1px solid #03A9F4';
        }
    }
}
