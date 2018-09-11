import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CourseService } from '@containers/courses/shared/course.service';
import { switchMap } from 'rxjs/operators';
import { Author, Course } from '@containers/courses/shared/course.model';
import { Observable } from 'rxjs';
import { BlockerService } from '@components/shared/blocker.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-edit-course',
    templateUrl: './edit-course.component.html',
    styleUrls: ['./edit-course.component.css'],
})
export class EditCourseComponent implements OnInit {
    id: string;
    editCourseForm = new FormGroup({
        title: new FormControl('', [Validators.required, Validators.maxLength(50)]),
        description: new FormControl('', [Validators.required, Validators.maxLength(500)]),
        date: new FormControl('', [Validators.required]),
        duration: new FormControl(0, [Validators.required]),
        authors: new FormControl('', [Validators.required]),
    });

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: CourseService,
        private blockerService: BlockerService
    ) {}

    ngOnInit() {
        this.blockerService.show(true);
        this.route.paramMap
            .pipe(switchMap((params: ParamMap) => this.service.getCourseById(params.get('id'))))
            .subscribe((course: Course) => {
                this.editCourseForm = new FormGroup({
                    title: new FormControl(course.name, [
                        Validators.required,
                        Validators.maxLength(50),
                    ]),
                    description: new FormControl(course.description, [
                        Validators.required,
                        Validators.maxLength(500),
                    ]),
                    date: new FormControl(course.date, [Validators.required]),
                    duration: new FormControl(+course.length, [Validators.required]),
                    authors: new FormControl(this.authorsToString(course.authors), [
                        Validators.required,
                    ]),
                });
                this.id = course.id;
                this.blockerService.show(false);
            });
    }

    private authorsToString(authors: Author[]): string {
        return authors
            .reduce((accum, value) => {
                return `${accum}, ${value.firstName} ${value.lastName}`;
            }, '')
            .slice(1);
    }

    private getAuthors(authors): Author[] {
        return authors.split(',').map(value => {
            const author = value.trim().split(' ');
            return {
                firstName: author[0],
                lastName: author[1],
            };
        });
    }

    public onCancelClick() {
        this.router.navigate(['/courses']);
    }

    onSubmit() {
        const data = this.editCourseForm.value;

        event.preventDefault();
        this.blockerService.show(true);
        this.service
            .createCourse({
                name: data.title,
                authors: this.getAuthors(data.authors),
                date: data.date,
                description: data.description,
                isTopRated: false,
                length: data.duration.toString(),
            })
            .subscribe(() => {
                this.blockerService.show(false);
                this.router.navigate(['courses']);
            });
    }
}
