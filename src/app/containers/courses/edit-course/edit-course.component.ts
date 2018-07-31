import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CourseService } from '@containers/courses/shared/course.service';
import { switchMap } from 'rxjs/operators';
import { Course } from '@containers/courses/shared/course.model';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-edit-course',
    templateUrl: './edit-course.component.html',
    styleUrls: ['./edit-course.component.css'],
})
export class EditCourseComponent implements OnInit {
    public title: string;
    public description: string;
    public date: string;
    public duration: number;
    public authors: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: CourseService
    ) {
        this.title = '';
        this.description = '';
        this.date = '';
        this.duration = 0;
        this.authors = '';
    }

    ngOnInit() {
        this.route.paramMap
            .pipe(switchMap((params: ParamMap) => this.service.getCourseById(+params.get('id'))))
            .subscribe(course => {
                this.title = course.title;
                this.description = course.description;
                this.date = course.creationDate.toDateString();
                this.authors = course.authors;
                this.duration = course.durationMin;
            });
    }

    public onTitleInput(value: string) {
        this.title = value;
    }

    public onDescriptionInput(value: string) {
        this.description = value;
    }

    public onDateInput(value: string) {
        this.date = value;
    }

    public onDurationInput(value: number) {
        this.duration = value;
    }

    public onAuthorsInput(value: string) {
        this.authors = value;
    }

    public onCancelClick() {
        this.router.navigate(['courses']);
    }
}
