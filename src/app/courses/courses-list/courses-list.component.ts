import { Component, OnInit } from '@angular/core';
import { Course } from '../shared/course.model';
import { CourseService } from '../shared/course.service';

@Component({
    selector: 'app-courses-list',
    templateUrl: './courses-list.component.html',
    styleUrls: ['./courses-list.component.css'],
})
export class CoursesListComponent implements OnInit {
    public courses: Course[];
    constructor(private service: CourseService) {}

    ngOnInit() {
        this.courses = this.service.getCourses();
    }

    public onDeleted(course: Course): void {
        const deletedCourse: Course =  this.service.deleteCourse(course.id);
        this.courses = this.courses.filter(item => item.id !== deletedCourse.id);
    }

}
