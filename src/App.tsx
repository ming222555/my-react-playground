import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom"; // https://github.com/marmelab/react-admin/issues/3242

import './App.scss';
import HomePage from 'pages/HomePage/HomePage';
import AppHeader from 'layouts/AppHeader';

function App() {
    return (
        <Router>
            <Link to="/boh">Boh</Link>
            <Link to="/about">About</Link>
            <Link to="/dashboard/me">Dashboard</Link>
            <Link to="/">Home</Link>
            <div className="app">
                <AppHeader />
                <HomePage />
            </div>
        </Router>
    );
}

export default App;
