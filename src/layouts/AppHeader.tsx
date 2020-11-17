import React from 'react';
import { useLocation } from "react-router-dom";

import './AppHeader.scss';
import HomePageHeader from 'layouts/Headers/HomePageHeader/HomePageHeader';
import Co from 'layouts/Headers/Co/Co';
import Boh from 'layouts/Headers/Boh/Boh';
import * as NewCartItemActions from 'store/newCartItem/newCartItem.actions';
import * as AuthActions from 'store/auth/auth.actions';

import { getState as _getState, appStore } from '../store/appStore';

function getState() {
    console.log('_getState() _getState() _getState() ', _getState());
}

// function newCartItem() {
//     appStore.dispatch({
//         type: NewCartItemActions.NEW_CART_ITEM,
//         payload: {
//             itemId: 'itemx',
//             price: 123,
//             qty: 456
//         }
//     } as NewCartItemActions.NewCartItem);
// }
function newCartItem() {
    appStore.dispatch( new NewCartItemActions.NewCartItem({
        itemId: 'itemx',
        price: 123,
        qty: 456
    }));
}

function setUnauthenticated() {
    appStore.dispatch( new AuthActions.SetUnauthenticated());
}

function AppHeader({...props}) {
    console.log('function AppHeader props zzzZZZZZ',props);
    const loc = useLocation();
    const pathname = loc.pathname;

    if ( pathname == '/') {
        return (
            <header className="app__header">
                <Co />
                <HomePageHeader />
                <button onClick={getState}>getstate</button>
                <button onClick={newCartItem}>new cart item</button>
                <button onClick={setUnauthenticated}>unauth</button>
            </header>
        );
    }

    if ( pathname == '/about') {
        return (
            <header className="app__header">
                <Co />
                <HomePageHeader />
            </header>
        );
    }

    if ( pathname == '/boh') {
        return (
            <header className="app__header">
                <Boh />
            </header>
        );
    }

    const pos2ndSlash = pathname.indexOf( '/',1);

    const pathnamesHomePageHeader: string = '/about';

    let out;
console.log('AppHeader AppHeader pathname',pathname);
    if ( pathnamesHomePageHeader.indexOf( pathname) > -1) {
        out = <HomePageHeader />
    }
    
    return (
        <header className="app__header">
            {out} {pathname}
        </header>
    );
}

export default AppHeader;
