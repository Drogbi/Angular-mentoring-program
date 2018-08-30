import { User } from './shared/user.model';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AuthService } from './shared/auth.service';
import { Router } from '@angular/router';
import { AuthActionTypes, Login, LoginFailure, LoginSuccess } from './actions';
import { map, exhaustMap, catchError, tap } from 'rxjs/operators';
import { Authenticate } from './shared/authenticate.model';
import { of } from 'rxjs';

@Injectable()
export class AuthEffects {
    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private router: Router
    ) {}

    @Effect()
    login$ = this.actions$.pipe(
        ofType(AuthActionTypes.Login),
        map((action: Login) => action.payload),
        exhaustMap((auth: Authenticate) =>
            this.authService.login(auth).pipe(
                map(user => new LoginSuccess({ user })),
                catchError(err => of(new LoginFailure(err)))
            )
        )
    );

    @Effect({ dispatch: false })
    loginSuccess$ = this.actions$.pipe(
        ofType(AuthActionTypes.LoginSuccess),
        tap((res: any) => localStorage.setItem('token', res.payload.user[0].fakeToken)),
        tap(() => this.router.navigate(['/courses']))
    );

    @Effect({ dispatch: false })
    loginRedirect = this.actions$.pipe(
        ofType(AuthActionTypes.LoginRedirect, AuthActionTypes.Logout),
        tap(authed => this.router.navigate(['/login']))
    );
}
