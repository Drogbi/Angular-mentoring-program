import { Component, HostBinding, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-courses-toolbox',
    templateUrl: './courses-toolbox.component.html',
    styleUrls: ['./courses-toolbox.component.css'],
})
export class CoursesToolboxComponent implements OnInit {
    public searchValue: string;
    @Output() searchClicked: EventEmitter<string> = new EventEmitter<string>();

    constructor() {
        this.searchValue = '';
    }

    ngOnInit() {}

    public onSearchValueInput(value: string) {
        this.searchValue = value;
    }

    public onSearchClick() {
        this.searchClicked.emit(this.searchValue);
        console.log(`Searching for: ${this.searchValue}...`);
    }
}
