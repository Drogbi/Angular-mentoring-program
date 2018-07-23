import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-logo',
    templateUrl: './logo.component.html',
    styleUrls: ['./logo.component.css'],
})
export class LogoComponent implements OnInit {
    public logoName = 'Courses App';

    constructor(private router: Router) {}

    ngOnInit() {}

    public onLogoClick() {
        this.router.navigate(['courses']);
    }
}
