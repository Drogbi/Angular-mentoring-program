import { Component } from '@angular/core';
import { Router } from '../../node_modules/@angular/router';
import { AuthService } from './containers/auth/shared/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    constructor(public authService: AuthService, router: Router) {
        authService.isAuthenticated().subscribe(isAuthenticated => {
            if (!isAuthenticated) {
                router.navigate(['login']);
            }
        });
    }
}
