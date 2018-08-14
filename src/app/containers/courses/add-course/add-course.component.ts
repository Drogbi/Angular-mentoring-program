import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from '@containers/courses/shared/course.service';
import { Author } from '@containers/courses/shared/course.model';
import { BlockerService } from '@components/shared/blocker.service';

@Component({
    selector: 'app-add-course',
    templateUrl: './add-course.component.html',
    styleUrls: ['./add-course.component.css'],
})
export class AddCourseComponent implements OnInit {
    public title: string;
    public description: string;
    public date: string;
    public duratoin: number;
    public authors: string;

    constructor(
        private blockerService: BlockerService,
        private router: Router,
        private service: CourseService
    ) {
        this.title = '';
        this.description = '';
        this.date = '';
        this.duratoin = 0;
        this.authors = '';
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
        this.duratoin = value;
    }

    public onAuthorsInput(value: string) {
        this.authors = value;
    }

    public onCancelClick() {
        this.router.navigate(['courses']);
    }

    private getAuthors(): Author[] {
        return this.authors.split(',').map(value => {
            const author = value.split(' ');
            return {
                firstName: author[0],
                lastName: author[1],
            };
        });
    }

    public onSaveClick(event: Event) {
        event.preventDefault();
        this.blockerService.show(true);
        this.service
            .createCourse({
                name: this.title,
                authors: this.getAuthors(),
                date: this.date,
                description: this.description,
                isTopRated: false,
                length: this.duratoin.toString(),
            })
            .subscribe(() => {
                this.blockerService.show(false);
                this.router.navigate(['courses']);
            });
    }

    ngOnInit() {}
}
