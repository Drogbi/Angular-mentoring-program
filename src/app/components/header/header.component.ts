import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../containers/auth/shared/auth.service';
import { Router, ActivationEnd } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
    constructor(public authService: AuthService, private router: Router) {}

    public isAuthenticated: boolean;

    ngOnInit() {
        this.router.events.subscribe(event => {
            if (event instanceof ActivationEnd) {
                this.authService.isAuthenticated().subscribe(value => {
                    this.isAuthenticated = value;
                });
            }
        });
    }

    public onLogoutClick(): void {
        this.authService.logout();
        this.router.navigate(['login']);
    }
}
