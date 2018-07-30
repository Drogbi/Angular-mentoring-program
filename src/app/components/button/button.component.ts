import {
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
    ChangeDetectionStrategy,
} from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements OnInit {
    @Input() label: string;
    @Input() size: 's' | 'm' | 'l';
    @Input() shape: 'round' | 'square';
    @Input() icon: string;
    @Input() color: 'green' | 'light-blue' | 'red';
    @Output() click: EventEmitter<any> = new EventEmitter<any>();

    currentClasses: Record<string, boolean>;
    constructor() {
        this.size = 'm';
        this.shape = 'square';
        this.color = 'light-blue';
        this.setCurrentClasses();
    }

    private setCurrentClasses() {
        this.currentClasses = {
            button: true,
            'button_without-label': !this.label,
            'button_size-s': this.size === 's',
            'button_size-m': this.size === 'm',
            'button_size-l': this.size === 'l',
            'button_shape-square': this.shape === 'square',
            'button_shape-round': this.shape === 'round',
            'button_color-red': this.color === 'red',
            'button_color-green': this.color === 'green',
            'button_color-light-blue': this.color === 'light-blue',
        };
    }

    ngOnInit() {
        this.setCurrentClasses();
    }
}
