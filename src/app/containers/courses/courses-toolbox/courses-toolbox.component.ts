import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
    selector: 'app-courses-toolbox',
    templateUrl: './courses-toolbox.component.html',
    styleUrls: ['./courses-toolbox.component.css'],
})
export class CoursesToolboxComponent implements OnInit {
    public searchValue: string;

    constructor() {
        this.searchValue = '';
    }

    ngOnInit() {}

    public onSearchValueInput(value: string) {
        console.log('change');
        this.searchValue = value;
    }

    public onSearchClick() {
        console.log(`Searching for: ${this.searchValue}...`);
    }
}
