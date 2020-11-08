import React from 'react';
import { useLocation } from "react-router-dom";

import './AppHeader.scss';
import HomePageHeader from 'layouts/Headers/HomePageHeader/HomePageHeader';
import Co from 'layouts/Headers/Co/Co';
import Boh from 'layouts/Headers/Boh/Boh';

function AppHeader({...props}) {
    console.log('function AppHeader props',props);
    const loc = useLocation();
    const pathname = loc.pathname;

    if ( pathname == '/') {
        return (
            <header className="app__header">
                <Co />
                <HomePageHeader />
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
