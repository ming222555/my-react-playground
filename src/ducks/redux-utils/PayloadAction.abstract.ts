import { Action } from 'redux';

/**
 * @template T the type of the action's `payload` tag.
 */
// export interface PayloadAction<T = any> extends Action {
//     readonly payload: T
// }

/**
 * @template T the type of the action's `type` tag.
 * @template T2 the type of the action's `payload` tag.
 */
// export abstract class PayloadAction<T = any, T2 = any> implements Action {
//     abstract readonly type: T;
//     public abstract readonly payload: T2;
// }

export default abstract class PayloadAction<T = any, T2 = any> implements Action {
    abstract readonly type: T;
    public abstract readonly payload: T2;
}

// interface PayloadWithAction<T = any> extends Action {
//     readonly payload: T
// }