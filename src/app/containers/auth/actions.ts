import { Action } from '@ngrx/store';
import { User } from './shared/user.model';
import { Authenticate } from './shared/authenticate.model';

export enum AuthActionTypes {
    Login = '[Auth] Login',
    Logout = '[Auth] Logout',
    LoginSuccess = '[Auth] Login Success',
    LoginFailure = '[Auth] Login Failure',
    LoginRedirect = '[Auth] Login Redirect',
}

export class Login implements Action {
    readonly type = AuthActionTypes.Login;

    constructor(public payload: Authenticate) {}
}

export class LoginSuccess implements Action {
    readonly type = AuthActionTypes.LoginSuccess;

    constructor(public payload: { user: User }) {}
}

export class Logout implements Action {
    readonly type = AuthActionTypes.Logout;

    constructor(public payload: any) {}
}

export class LoginFailure implements Action {
    readonly type = AuthActionTypes.LoginFailure;

    constructor(public payload: any) {}
}

export class LoginRedirect implements Action {
    readonly type = AuthActionTypes.LoginRedirect;
}

export type AuthActions = Login | LoginSuccess | LoginFailure | LoginRedirect | Logout;
