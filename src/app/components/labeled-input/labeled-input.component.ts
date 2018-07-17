import { Component, OnInit, Input } from '@angular/core';
import { InputComponent } from '@components/input/input.component';

@Component({
    selector: 'app-labeled-input',
    templateUrl: './labeled-input.component.html',
    styleUrls: ['./labeled-input.component.css'],
})
export class LabeledInputComponent extends InputComponent implements OnInit {
    @Input() label: string;

    constructor() {
        super();
    }

    ngOnInit() {}
}
