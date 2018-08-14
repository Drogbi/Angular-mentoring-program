import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CourseService } from '@containers/courses/shared/course.service';
import { switchMap } from 'rxjs/operators';
import { Author, Course } from '@containers/courses/shared/course.model';
import { Observable } from 'rxjs';
import { BlockerService } from '@components/shared/blocker.service';

@Component({
    selector: 'app-edit-course',
    templateUrl: './edit-course.component.html',
    styleUrls: ['./edit-course.component.css'],
})
export class EditCourseComponent implements OnInit {
    private id: string;
    public title: string;
    public description: string;
    public date: string;
    public duration: number;
    public authors: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: CourseService,
        private blockerService: BlockerService
    ) {
        this.id = null;
        this.title = '';
        this.description = '';
        this.date = '';
        this.duration = 0;
        this.authors = '';
    }

    ngOnInit() {
        this.blockerService.show(true);
        this.route.paramMap
            .pipe(switchMap((params: ParamMap) => this.service.getCourseById(params.get('id'))))
            .subscribe((course: Course) => {
                this.id = course.id;
                this.title = course.name;
                this.description = course.description;
                this.date = course.date;
                this.authors = this.authorsToString(course.authors);
                this.duration = +course.length;
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

    private getAuthors(): Author[] {
        return this.authors.split(',').map(value => {
            const author = value.trim().split(' ');
            return {
                firstName: author[0],
                lastName: author[1],
            };
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
        this.router.navigate(['/courses']);
    }

    public onSaveClick(event: Event) {
        event.preventDefault();
        this.blockerService.show(true);
        this.service
            .updateCourse(this.id, {
                name: this.title,
                authors: this.getAuthors(),
                date: this.date,
                description: this.description,
                isTopRated: false,
                length: this.duration.toString(),
            })
            .subscribe(() => {
                this.blockerService.show(false);
                this.router.navigate(['/courses']);
            });
    }
}
