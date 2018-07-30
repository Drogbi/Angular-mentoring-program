import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter,
    ChangeDetectionStrategy,
} from '@angular/core';

@Component({
    selector: 'app-text-area',
    templateUrl: './text-area.component.html',
    styleUrls: ['./text-area.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextAreaComponent implements OnInit {
    @Input() public value: string;
    @Input() public placeholder: string;
    @Output() onchange: EventEmitter<string> = new EventEmitter<string>();
    @Input() public rows: number;

    constructor() {
        this.value = null;
    }

    ngOnInit() {}

    public onChange(value: string) {
        this.onchange.emit(value);
    }
}
