import { Action } from 'redux';
export const SET_UNAUTHENTICATED = 'SET_UNAUTHENTICATED';

export class SetUnauthenticated implements Action {
    readonly type = SET_UNAUTHENTICATED;
}

export type AuthActions = SetUnauthenticated;
