import { Injectable } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { User } from './user.model';
import { HttpClient } from '@angular/common/http';
import { Authenticate } from './authenticate.model';

const baseUrl = 'http://localhost:3004/users';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private http: HttpClient) {}

    public login(auth: Authenticate): Observable<User> {
        return this.http.get<User>(`${baseUrl}`, {
            params: { login: auth.login, password: auth.password },
        });
    }

    public logout(): void {
        localStorage.removeItem('token');
    }

    public isAuthenticated(): Observable<boolean> {
        return of<boolean>(!!localStorage.getItem('token'));
    }

    public getUserInfo(): Observable<User[]> {
        return this.http.get<User[]>(`${baseUrl}`, {
            params: { fakeToken: localStorage.getItem('token') },
        });
    }
}
