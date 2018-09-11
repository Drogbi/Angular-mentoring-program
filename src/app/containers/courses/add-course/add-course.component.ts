import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from '@containers/courses/shared/course.service';
import { Author } from '@containers/courses/shared/course.model';
import { BlockerService } from '@components/shared/blocker.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
    selector: 'app-add-course',
    templateUrl: './add-course.component.html',
    styleUrls: ['./add-course.component.css'],
})
export class AddCourseComponent implements OnInit {
    addCourseForm = new FormGroup({
        title: new FormControl('', [Validators.required, Validators.maxLength(50)]),
        description: new FormControl('', [Validators.required, Validators.maxLength(500)]),
        date: new FormControl('', [Validators.required]),
        duration: new FormControl(0, [Validators.required]),
        authors: new FormControl('', [Validators.required]),
    });

    constructor(
        private blockerService: BlockerService,
        private router: Router,
        private service: CourseService
    ) {}

    private getAuthors(authors): Author[] {
        return authors.split(',').map(value => {
            const author = value.split(' ');
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
        const data = this.addCourseForm.value;

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

    ngOnInit() {}
}
