import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor() {}

    public login(login: string, password: string): string {
        const token = `token${login}${password}`;
        localStorage.setItem('login', login);
        localStorage.setItem('password', password);
        localStorage.setItem('token', token);

        return token;
    }

    public logout(): void {
        localStorage.removeItem('login');
        localStorage.removeItem('password');
        localStorage.removeItem('token');
    }

    public isAuthenticated(): boolean {
        return !!localStorage.getItem('token');
    }

    public getUserInfo(): string {
        return localStorage.getItem('login');
    }
}
