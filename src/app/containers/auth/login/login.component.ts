import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router } from '../../../../../node_modules/@angular/router';
import { State as AuthState } from '../auth.reducer';
import { Store } from '@ngrx/store';
import { Login } from '../actions';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
    public login: string;
    public password: string;

    constructor(
        private authService: AuthService,
        private router: Router,
        private store: Store<AuthState>
    ) {
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
        this.store.dispatch(new Login({ login: this.login, password: this.password }));
    }
}
