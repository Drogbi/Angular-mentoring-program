import { AuthActions, AuthActionTypes } from './actions';
import { User } from './shared/user.model';

export interface State {
    loggedIn: boolean;
    user: User | null;
}

export const initialState: State = {
    loggedIn: false,
    user: null,
};

export function authReducer(state = initialState, action: AuthActions): State {
    switch (action.type) {
        case AuthActionTypes.LoginSuccess: {
            return {
                ...state,
                loggedIn: true,
                user: action.payload.user,
            };
        }
        case AuthActionTypes.Logout: {
            return initialState;
        }

        default: {
            return state;
        }
    }
}
