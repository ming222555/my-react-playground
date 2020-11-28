export default function actionClassObjToPlainObj(props: any) {
    // https://redux.js.org/api/applymiddleware
    return (next: any) => (action: any) => {
        let p2 = Object.assign({}, action);
        return next(p2);
    }
}
