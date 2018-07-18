import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../containers/auth/shared/auth.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
    constructor(public authService: AuthService, private router: Router) {}

    ngOnInit() {}

    public onLogoutClick(): void {
        this.authService.logout();
        this.router.navigate(['login']);
    }
}
