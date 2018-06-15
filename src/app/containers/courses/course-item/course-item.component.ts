import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../shared/course.model';
import * as moment from 'moment';
import { CourseService } from '../shared/course.service';
import { C } from '@angular/core/src/render3';

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

    public getFormattedCourseDate(): string {
        return moment(this.course.creationDate).format(dateFormat);
    }

    public deleteCourse(): void {
        this.deleted.emit(this.course);
    }

}
