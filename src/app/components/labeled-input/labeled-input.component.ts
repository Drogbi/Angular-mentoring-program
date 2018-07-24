import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { InputComponent } from '@components/input/input.component';

@Component({
    selector: 'app-labeled-input',
    templateUrl: './labeled-input.component.html',
    styleUrls: ['./labeled-input.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabeledInputComponent extends InputComponent implements OnInit {
    @Input() label: string;

    constructor() {
        super();
    }

    ngOnInit() {}
}
