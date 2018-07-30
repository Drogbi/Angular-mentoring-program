import { Component, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';

@Component({
    selector: 'app-breadcrumbs',
    templateUrl: './breadcrumbs.component.html',
    styleUrls: ['./breadcrumbs.component.css'],
})
export class BreadcrumbsComponent implements OnInit {
    public path: string;

    constructor(private router: Router) {}

    ngOnInit() {
        this.router.events.subscribe(event => {
            if (event instanceof ActivationEnd) {
                this.path = event.snapshot.data.title;
            }
        });
    }
}
