import { Injectable } from '@angular/core';
import { Observable, from, of } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor() {}

    public login(login: string, password: string): Observable<string> {
        const token = `token${login}${password}`;
        localStorage.setItem('login', login);
        localStorage.setItem('password', password);
        localStorage.setItem('token', token);

        return of<string>(token);
    }

    public logout(): void {
        localStorage.removeItem('login');
        localStorage.removeItem('password');
        localStorage.removeItem('token');
    }

    public isAuthenticated(): Observable<boolean> {
        return of<boolean>(!!localStorage.getItem('token'));
    }

    public getUserInfo(): Observable<string> {
        return of<string>(localStorage.getItem('login'));
    }
}
