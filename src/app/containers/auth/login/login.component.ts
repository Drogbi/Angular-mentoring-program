import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
    public login: string;
    public password: string;

    constructor() {
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
}
