import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { s } from '@angular/core/src/render3';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
    @Input() label: string;
    @Input() size: string;
    @Input() shape: string;
    @Input() icon: string;
    @Input() color: string;
    @Output() click: EventEmitter<any> = new EventEmitter<any>();


    currentClasses: Record<string, boolean>;
    constructor() {
        this.size = 'm';
        this.shape = 'square';
        this.color = 'light-blue';
        this.setCurrentClasses();
    }

    private setCurrentClasses() {
        this.currentClasses =  {
            'button': true,
            'button_without-label': !this.label,
            'button_size-s': this.size === 's',
            'button_size-m': this.size === 'm',
            'button_size-l': this.size === 'l',
            'button_shape-square': this.shape === 'square',
            'button_shape-round': this.shape === 'round',
            'button_color-red': this.color === 'red',
            'button_color-green': this.color === 'green',
            'button_color-light-blue': this.color === 'light-blue'
        };
    }

    ngOnInit() {
        this.setCurrentClasses();
    }



}
