import {
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
    ChangeDetectionStrategy,
} from '@angular/core';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent implements OnInit {
    @Input() public value: string;
    @Input() public size: string;
    @Input() public placeholder: string;
    @Output() onchange: EventEmitter<string> = new EventEmitter<string>();
    @Input() public type: 'text' | 'number';

    currentClasses: Record<string, boolean>;
    constructor() {
        this.size = 'm';
        this.value = null;
    }

    private setCurrentClasses() {
        this.currentClasses = {
            input: true,
            input_s: this.size === 's',
            input_m: this.size === 'm',
            input_l: this.size === 'l',
        };
    }

    public onChange(value: string) {
        this.onchange.emit(value);
    }

    ngOnInit() {
        this.setCurrentClasses();
    }
}
