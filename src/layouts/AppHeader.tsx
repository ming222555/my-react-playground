import React, { useContext } from 'react';
import { useLocation } from "react-router-dom";

import './AppHeader.scss';
import HomePageHeader from 'layouts/Headers/HomePageHeader/HomePageHeader';
import Co from 'layouts/Headers/Co/Co';
import Boh from 'layouts/Headers/Boh/Boh';
import { NewCartItem, ClearCartItem } from 'ducks/newCartItem';
import { SetCartId, ClearCartId } from 'ducks/cartId';

import store from  'ducks/redux-utils/store';

function getState() {
    console.log('_getState() _getState() _getState() ', store.getState());
}

function newCartItem() {
    store.dispatch( new NewCartItem({
        itemId: 'itemx',
        price: 654,
        qty: 456
    }));
}

function clearCartItem() {
    store.dispatch( new ClearCartItem());
}

function setCartId() {
    store.dispatch( new SetCartId({
        cartId: 'cartX'
    }));
}

function clearCartId() {
    store.dispatch( new ClearCartId());
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
                <button onClick={clearCartItem}>clear cart item</button>
                <button onClick={setCartId}>set cart id</button>
                <button onClick={clearCartId}>clear cart id</button>
                {/* <button onClick={replaceStore}>replace store</button> */}
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
