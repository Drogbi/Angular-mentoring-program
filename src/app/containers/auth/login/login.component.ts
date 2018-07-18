import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router } from '../../../../../node_modules/@angular/router';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
    public login: string;
    public password: string;

    constructor(private authService: AuthService, private router: Router) {
        this.login = '';
        this.password = '';
    }

    ngOnInit() {}

    public onLoginChange(value: string): void {
        this.login = value;
    }

    public onPasswordChange(value: string): void {
        this.password = value;
    }

    public onLoginClick(): void {
        if (this.login && this.password) {
            this.authService.login(this.login, this.password);
            this.router.navigate(['courses']);
        }
    }
}
