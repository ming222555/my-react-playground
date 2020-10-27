import React from 'react';
import s from './App.module.scss';
import HomePage from 'pages/HomePage/HomePage';

function App() {
    return (
        <div className={`${s.app}`}>
            <span className="u-underline">I am App</span>
            <div className={`${s.departments}`}>
                App departments
            </div>
            <HomePage />
        </div>
    );
}

export default App;
