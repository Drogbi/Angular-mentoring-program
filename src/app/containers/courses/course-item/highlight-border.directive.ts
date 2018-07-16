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
        if (
            this.creationDate < this.currentDate &&
            this.creationDate >= new Date(new Date().setDate(new Date().getDate() - 14))
        ) {
            this.element.nativeElement.classList.add('course_fresh');
        } else if (this.creationDate > this.currentDate) {
            this.element.nativeElement.classList.add('course_upcoming');
        }
    }
}
