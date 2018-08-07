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
    count: number;
    searchValue: string;
    courses: Course[] = [];
    constructor(private service: CourseService, public filterCourseItems: FilterCourseItemsPipe) {
        this.count = 4;
        this.searchValue = '';
        this.service.getCourses('0', this.count.toString()).subscribe(courses => {
            this.courses = courses;
        });
    }

    public onDeleted(course: Course): void {
        this.service.deleteCourse(course.id).subscribe((data: Course) => {
            this.service.getCourses('0', this.count.toString()).subscribe(courses => {
                this.courses = courses;
            });
        });
    }

    public onLoadMoreClick(): void {
        this.count += 4;
        this.service.getCourses('0', this.count.toString()).subscribe(courses => {
            this.courses = courses;
        });
    }

    public onSearchClicked(value: string) {
        this.searchValue = value;
        this.service.searchCourses(value).subscribe(courses => {
            this.courses = courses;
        });
    }
}
