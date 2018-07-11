import { Component, ViewChild } from '@angular/core';
import { CoursesToolboxComponent } from '@containers/courses/courses-toolbox/courses-toolbox.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    searchValue: string;
    constructor() {
        this.searchValue = '';
    }

    onSearchClicked(value: string) {
        this.searchValue = value;
    }
}
