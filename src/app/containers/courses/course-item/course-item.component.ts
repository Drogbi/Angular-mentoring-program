import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../shared/course.model';

const dateFormat = 'DD/MM/YYYY';

@Component({
    selector: 'app-course-item',
    templateUrl: './course-item.component.html',
    styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent implements OnInit {
    @Input() course: Course;
    @Output() deleted = new EventEmitter<Course>();

    constructor() { }

    ngOnInit() {
    }

    public deleteCourse(): void {
        this.deleted.emit(this.course);
    }

}