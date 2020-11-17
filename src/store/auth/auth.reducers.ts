import AuthInterface from './auth.interface';
import * as AuthActions from './auth.actions';

const initialState: AuthInterface = {
    email: '',
    token: '',
    authenticated: false
};

export function authReducer(state = initialState, action: AuthActions.AuthActions): AuthInterface {
    switch (action.type) {
        case (AuthActions.SET_UNAUTHENTICATED):
            return {
                email: '',
                token: '',
                authenticated: false
            };
        default:
            return state;
    }
}

// export interface State extends AuthInterface {
// }