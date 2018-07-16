import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Course } from '@containers/courses/shared/course.model';
import { CourseService } from '@containers/courses/shared/course.service';
import { Observable, Subscription } from 'rxjs';
import { FilterCourseItemsPipe } from '@containers/courses/courses-list/filter-course-items.pipe';

@Component({
    selector: 'app-courses-list',
    templateUrl: './courses-list.component.html',
    styleUrls: ['./courses-list.component.css'],
})
export class CoursesListComponent implements OnInit, OnChanges {
    public courses: Course[];
    public coursesStore: Course[];
    @Input() searchValue: string;
    constructor(private service: CourseService, private filterCourseItems: FilterCourseItemsPipe) {
        this.searchValue = '';
    }

    ngOnInit() {
        this.service.getCourses().subscribe((data: Course[]) => {
            this.coursesStore = data;
            this.courses = this.coursesStore;
        });
    }

    ngOnChanges() {
        this.courses =
            this.coursesStore &&
            this.filterCourseItems.transform(this.coursesStore, this.searchValue);
    }

    public onDeleted(course: Course): void {
        this.service.deleteCourse(course.id).subscribe((data: Course) => {
            this.coursesStore = this.coursesStore.filter(item => item.id !== data.id);
        });
    }

    public onLoadMoreClick(): void {
        console.log('Loading More Courses...');
    }

    public onAddCourseClick(): void {
        console.log('Course added...');
    }
}
