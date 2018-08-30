import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../containers/auth/shared/auth.service';
import { Router, ActivationEnd } from '@angular/router';
import { User } from '../../containers/auth/shared/user.model';
import { first, take, flatMap } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import { State as AuthState } from '../../containers/auth/auth.reducer';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
    constructor(
        public authService: AuthService,
        private router: Router,
        private store: Store<AuthState>
    ) {}

    public isAuthenticated: boolean;
    public user: User;

    ngOnInit() {
        this.router.events.subscribe(event => {
            if (event instanceof ActivationEnd) {
                this.authService.isAuthenticated().subscribe(value => {
                    this.store.select('auth').subscribe(auth => {
                        this.isAuthenticated = auth.user[0].loggedIn;
                    });
                });
            }
        });
        this.store.select('auth').subscribe(auth => {
            this.user = auth.user[0];
        });
    }

    public onLogoutClick(): void {
        this.authService.logout();
        this.router.navigate(['login']);
    }
}
