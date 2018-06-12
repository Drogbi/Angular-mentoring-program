import { Component, Input, OnInit } from '@angular/core';
import { setCurrentInjector } from '@angular/core/src/di/injector';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
    @Input() public optionalClass: string;
    @Input() public value: string;
    @Input() public size: string;
    currentClasses: Record<string, boolean>;
    constructor() {
        this.optionalClass = '';
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
        if (this.optionalClass) {
            this.currentClasses[this.optionalClass] = true;
        }
    }

    ngOnInit() {
        this.setCurrentClasses();
    }

}
