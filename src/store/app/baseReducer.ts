import { combineReducers, configureStore, Action } from '@reduxjs/toolkit'


const emptyReducer = combineReducers({});

const store = configureStore({
    reducer: emptyReducer,
    middleware: [ actionClassObjToPlainObj]
});

function actionClassObjToPlainObj(props: any) {
    // https://redux.js.org/api/applymiddleware
    return (next: any) => (action: any) => {
        let p2 = Object.assign({}, action);
        return next(p2);
    }
}

export default store;
// export type baseState = ReturnType<typeof baseReducer>;