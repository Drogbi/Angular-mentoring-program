import { Component, OnInit } from '@angular/core';
import { ActivationEnd, Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { CourseService } from '@containers/courses/shared/course.service';

@Component({
    selector: 'app-breadcrumbs',
    templateUrl: './breadcrumbs.component.html',
    styleUrls: ['./breadcrumbs.component.css'],
})
export class BreadcrumbsComponent implements OnInit {
    public path: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private courseService: CourseService
    ) {}

    ngOnInit() {
        this.router.events.subscribe(event => {
            if (event instanceof ActivationEnd) {
                console.log(event);
                this.path = event.snapshot.data.title;

                // Details
                if (event.snapshot.params.id) {
                    this.courseService.getCourseById(+event.snapshot.params.id).subscribe(item => {
                        this.path += item.title;
                    });
                }
            }
        });
    }
}
