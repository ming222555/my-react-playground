import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { QueryCache, ReactQueryCacheProvider } from "react-query";

import './index.scss';
import App from './App';
import store from 'ducks/redux-utils/store';
/* import reportWebVitals from './reportWebVitals'; */

const cartId = localStorage.getItem('cartId') || ''

const queryCache = new QueryCache();

ReactDOM.render(
    <React.StrictMode>
        <ReactQueryCacheProvider queryCache={queryCache}>
            <Provider store={store}>
                <Router>
                    <Route path="/">
                        <App cartId={cartId} />
                    </Route>
                </Router>
            </Provider>
        </ReactQueryCacheProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
/* reportWebVitals(); */
