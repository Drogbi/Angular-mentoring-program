import { Component, OnChanges } from '@angular/core';
import { Course } from '@containers/courses/shared/course.model';
import { FilterCourseItemsPipe } from '@containers/courses/courses-list/filter-course-items.pipe';
import { CourseService } from '@containers/courses/shared/course.service';
import { AuthService } from './containers/auth/shared/auth.service';
import { Router } from '../../node_modules/@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    constructor(public authService: AuthService, router: Router) {
        authService.isAuthenticated().subscribe(isAuthenticated => {
            if (!isAuthenticated) {
                router.navigate(['login']);
            }
        });
    }
}
