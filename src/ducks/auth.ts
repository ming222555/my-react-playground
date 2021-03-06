import { Action } from "redux";

import PayloadAction from './redux-utils/PayloadAction.abstract';

export interface State {
    token: string;
    userEmail: string
}

const initialState: State = {
    token: 'inittoken123',
    userEmail: 'initemail123'
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

const authReducer = (state: any = initialState, action: SetAuthenticatedWithToken | SetUnauthenticated): State => {
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