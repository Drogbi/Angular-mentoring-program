import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FilterCourseItemsPipe } from '@containers/courses/courses-list/filter-course-items.pipe';
import { Course } from '@containers/courses/shared/course.model';
import { CourseService } from '@containers/courses/shared/course.service';
import { debounceTime, filter, finalize, tap, merge } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { BlockerService } from '@components/shared/blocker.service';

@Component({
    selector: 'app-courses-list',
    templateUrl: './courses-list.component.html',
    styleUrls: ['./courses-list.component.css'],
})
export class CoursesListComponent {
    searchValue: Subject<string> = new Subject<string>();
    courses: Course[] = [];
    constructor(
        private blockerService: BlockerService,
        private service: CourseService,
        public filterCourseItems: FilterCourseItemsPipe
    ) {
        this.searchValue
            .pipe(
                debounceTime(1000),
                tap(() => blockerService.show(true))
            )
            .subscribe(value => {
                this.service.searchCourses(value).subscribe(courses => {
                    this.courses = courses;
                    blockerService.show(false);
                });
            });
        blockerService.show(true);
        this.service.getCourses('0').subscribe(courses => {
            this.courses = courses;
            blockerService.show(false);
        });
    }

    public onDeleted(course: Course): void {
        this.blockerService.show(true);
        this.service.deleteCourse(course.id).subscribe((data: Course) => {
            this.service.getCourses('0').subscribe(courses => {
                this.courses = courses;
                this.blockerService.show(false);
            });
        });
    }

    public onSearchChange(value: string) {
        this.searchValue.next(value);
    }
}
