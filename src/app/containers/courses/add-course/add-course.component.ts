import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

    constructor(private router: Router) {
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

    ngOnInit() {}
}
