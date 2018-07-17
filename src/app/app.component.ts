import { Component, OnChanges } from '@angular/core';
import { Course } from '@containers/courses/shared/course.model';
import { FilterCourseItemsPipe } from '@containers/courses/courses-list/filter-course-items.pipe';
import { CourseService } from '@containers/courses/shared/course.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    searchValue: string;
    coursesStore: Course[];

    constructor(
        private courseService: CourseService,
        public filterCourseItems: FilterCourseItemsPipe
    ) {
        this.searchValue = '';
        this.courseService.getCourses().subscribe(courses => {
            this.coursesStore = courses;
        });
    }

    onSearchClicked(value: string) {
        this.searchValue = value;
        this.filterCourseItems.transform(this.coursesStore, this.searchValue);
    }
}
