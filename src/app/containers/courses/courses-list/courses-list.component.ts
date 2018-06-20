import { Component, OnInit } from '@angular/core';
import { Course } from '../shared/course.model';
import { CourseService } from '../shared/course.service';
import { Observable, Subscription } from 'rxjs';

@Component({
    selector: 'app-courses-list',
    templateUrl: './courses-list.component.html',
    styleUrls: ['./courses-list.component.css'],
})
export class CoursesListComponent implements OnInit {
    public courses: Course[];
    constructor(private service: CourseService) {}

    ngOnInit() {
        this.service.getCourses().subscribe((data: Course[]) => {
            this.courses = data;
        });
    }

    public onDeleted(course: Course): void {
        this.service.deleteCourse(course.id).subscribe((data: Course) => {
            this.courses = this.courses.filter(item => item.id !== data.id);
        });
    }

    public onLoadMoreClick(): void {
        console.log('Loading More Courses...');
    }


}
