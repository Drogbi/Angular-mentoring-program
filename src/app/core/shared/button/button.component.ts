import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
    @Input() label: string;
    @Input() size: string;
    @Input() public optionalClass: string;
    currentClasses: Record<string, boolean>;
    constructor() {
        this.size = 'm';
        this.setCurrentClasses();
    }

    private setCurrentClasses() {
        this.currentClasses =  {
            'button': true,
            'button_s': this.size === 's',
            'button_m': this.size === 'm',
            'button_l': this.size === 'l',
        };
        if (this.optionalClass) {
            this.currentClasses[this.optionalClass] = true;
        }
    }

    ngOnInit() {
        this.setCurrentClasses();
    }



}
