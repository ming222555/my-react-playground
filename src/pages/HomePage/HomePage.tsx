import React from 'react';
import s from './HomePage.module.scss';

function HomePage() {
    return (
        <div className={`${[s.homePage, 'u-underline'].join(' ')}`}>
            I am HomePage
            <div className={`${s.departments}`}>
                HomePage departments
            </div>
        </div>
    );
}

export default HomePage;
