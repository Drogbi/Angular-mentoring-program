import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../containers/auth/shared/auth.service';

@Component({
    selector: 'app-logo',
    templateUrl: './logo.component.html',
    styleUrls: ['./logo.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoComponent implements OnInit {
    public logoName = 'Courses App';

    constructor(private authService: AuthService, private router: Router) {}

    ngOnInit() {}

    public onLogoClick() {
        this.authService.isAuthenticated().subscribe(isAuthenticated => {
            if (isAuthenticated) {
                this.router.navigate(['courses']);
            }
        });
    }
}
