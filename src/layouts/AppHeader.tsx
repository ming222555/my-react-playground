import React, { useContext } from 'react';
import { useLocation } from "react-router-dom";
import { Route, Switch } from "react-router";

import PrimaryHeader from 'layouts/Headers/PrimaryHeader/PrimaryHeader';
import Co from 'layouts/Headers/Co/Co';
import Boh from 'layouts/Headers/Boh/Boh';
import { NewCartItem, ClearCartItem } from 'ducks/newCartItem';

import store from  'ducks/redux-utils/store';

function getState() {
    console.log('_getState() _getState() _getState() ', store.getState());
}

function newCartItem() {
    store.dispatch( new NewCartItem({
        cartId: 'cartX',
        itemId: 'itemx',
        itemName: 'itemxNamePoloshirt',
        qty: 456
    }));
}

function clearCartItem() {
    store.dispatch( new ClearCartItem());
}

// function AppHeader({ cartId, userEmail }:{[key:string]:any}) {
//     console.log('function AppHeader props zzzZZZZZ','cartId ' + cartId + ' userEmail ' + userEmail);
//     const loc = useLocation();
//     const pathname = loc.pathname;
//
//     if ( pathname == '/') {
//         return (
//             <header className="app__header">
//                 <PrimaryHeader {...{ cartId, userEmail }} />
//             </header>
//         );
//     }
//
//     if ( pathname == '/login' && userEmail) {
//         return (
//             <header className="app__header">
//                 <PrimaryHeader {...{ cartId, userEmail }} />
//             </header>
//         );
//     }
//
//     if ( pathname == '/login') {
//         return (
//             <header className="app__header">
//             </header>
//         );
//     }
//
//     if ( pathname == '/signup' && userEmail) {
//         return (
//             <header className="app__header">
//                 <PrimaryHeader {...{ cartId, userEmail }} />
//             </header>
//         );
//     }
//
//     if ( pathname == '/signup') {
//         return (
//             <header className="app__header">
//             </header>
//         );
//     }
//
//     return (
//         <header className="app__header">
//             <PrimaryHeader {...{ cartId, userEmail }} />
//         </header>
//     );
//
//     /* const pos2ndSlash = pathname.indexOf( '/',1);
//
//     const pathnamesPrimaryHeader: string = '/about';
//
//     let out;
// console.log('AppHeader AppHeader pathname',pathname);
//     if ( pathnamesPrimaryHeader.indexOf( pathname) > -1) {
//         out = <PrimaryHeader />
//     }
//
//     return (
//         <header className="app__header">
//             {out} {pathname}
//         </header>
//     ); */
// }

function AppHeader({ cartId, userEmail }:{[key:string]:any}) {
    
    return (
        <header className="App__header">
            <Switch>
                <Route exact path="/">
                    <PrimaryHeader {...{ cartId, userEmail }} />
                </Route>
                <Route path="/example">
                    {/* <ExampleHeader /> */}
                </Route>
                {/* <Route path="/:user">
                    <UserHeader />
                </Route> */}
                <Route>
                    <PrimaryHeader {...{ cartId, userEmail }} />
                </Route>
            </Switch>
        </header>
        // </ReactQueryCacheProvider>
    );
}

export default AppHeader;
