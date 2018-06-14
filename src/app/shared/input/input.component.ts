import { Component, Input, OnInit } from '@angular/core';
import { setCurrentInjector } from '@angular/core/src/di/injector';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
    @Input() public value: string;
    @Input() public size: string;
    @Input() public placeholder: string;

    currentClasses: Record<string, boolean>;
    constructor() {
        this.size = 'm';
        this.value = null;
    }

    private setCurrentClasses() {
        this.currentClasses =  {
            'input': true,
            'input_s': this.size === 's',
            'input_m': this.size === 'm',
            'input_l': this.size === 'l',
        };
    }

    ngOnInit() {
        this.setCurrentClasses();
    }

}
