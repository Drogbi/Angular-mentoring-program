import {
    Component,
    HostBinding,
    OnInit,
    Output,
    EventEmitter,
    OnChanges,
    Input,
} from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-courses-toolbox',
    templateUrl: './courses-toolbox.component.html',
    styleUrls: ['./courses-toolbox.component.css'],
})
export class CoursesToolboxComponent implements OnInit {
    @Input() searchValue: Subject<string>;
    @Output() searchChange: EventEmitter<string> = new EventEmitter<string>();

    constructor(private router: Router) {}

    ngOnInit() {}

    public onSearchValueInput(value: string) {
        this.searchChange.emit(value);
    }

    public onAddCourseClick() {
        this.router.navigate(['add-course']);
    }
}
