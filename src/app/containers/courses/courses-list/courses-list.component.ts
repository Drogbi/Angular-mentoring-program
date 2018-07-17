import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FilterCourseItemsPipe } from '@containers/courses/courses-list/filter-course-items.pipe';
import { Course } from '@containers/courses/shared/course.model';
import { CourseService } from '@containers/courses/shared/course.service';

@Component({
    selector: 'app-courses-list',
    templateUrl: './courses-list.component.html',
    styleUrls: ['./courses-list.component.css'],
})
export class CoursesListComponent {
    @Input() courses: Course[];
    constructor(private service: CourseService) {}

    public onDeleted(course: Course): void {
        this.service.deleteCourse(course.id).subscribe((data: Course) => {
            this.courses = this.courses.filter(item => item.id !== data.id);
        });
    }

    public onLoadMoreClick(): void {
        console.log('Loading More Courses...');
    }

    public onAddCourseClick(): void {
        console.log('Course added...');
    }
}
