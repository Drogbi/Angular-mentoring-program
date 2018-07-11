import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '@containers/courses/shared/course.model';

@Pipe({ name: 'filterCourseItems' })
export class FilterCourseItemsPipe implements PipeTransform {
    transform(courses: Course[], filterTitle: string) {
        return courses.filter(course =>
            course.title.toLowerCase().includes(filterTitle.toLowerCase())
        );
    }
}
