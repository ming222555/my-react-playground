import { Action } from "redux";

import PayloadAction from './redux-utils/PayloadAction.abstract';

export interface State {
    token: string;
    userEmail: string
}

const initialState: State = {
    token: '',
    userEmail: ''
}

const actionTypes = {
    SET_AUTHENTICATED_WITH_TOKEN: 'AUTH/SET_AUTHENTICATED_WITH_TOKEN',
    SET_UNAUTHENTICATED: 'AUTH/SET_UNAUTHENTICATED'
}

export class SetAuthenticatedWithToken implements PayloadAction {
    type = actionTypes.SET_AUTHENTICATED_WITH_TOKEN;
    constructor(public payload: State) {}
}

export class SetUnauthenticated implements Action {
    type = actionTypes.SET_UNAUTHENTICATED;
}

export type AuthActions = SetAuthenticatedWithToken | SetUnauthenticated; // use, new SetAuthenticatedWithToken({ token: '123', email: 'z@z.com' })

const authReducer = (state: any = initialState, action: AuthActions): State => {
    switch (action.type) {
        case (actionTypes.SET_AUTHENTICATED_WITH_TOKEN):
            return {...state, ...(action as SetAuthenticatedWithToken).payload};
        case (actionTypes.SET_UNAUTHENTICATED):
            return {...initialState};
        default:
            return state;
    }
}

export default authReducer;