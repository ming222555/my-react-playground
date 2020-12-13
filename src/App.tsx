import React, { useState, useEffect } from 'react';
import { useQuery, QueryCache } from "react-query";
import { connect } from 'react-redux';
import { Route, Switch } from "react-router";

import './App.scss';
import HomePage from 'pages/HomePage/HomePage';
import AppHeader from 'layouts/AppHeader';
import { StoreShape, FullStoreShape } from 'ducks/redux-utils/types';

const mapStateToProps = ( state: StoreShape) => ({
    userEmail: (state as FullStoreShape).AUTH_NAMESPACE.userEmail
});

const queryCache = new QueryCache();

interface Zz {name: string, description: string, subscribers_count: string, stargazers_count: string, forks_count: string};

function Example() {
    const { isLoading, data, error   } = useQuery<Zz, Error>("repoData", () =>
      fetch(
        "https://api.github.com/repos/tannerlinsley/react-query"
      ).then((res) => res.json())
    );
  
    if (isLoading){
        console.log('function Example zzrrrrrrrz loading');
        return (<p>Loading...</p>)
    };
  
    if (error){
        console.log('errrror', error);
        return (<p>An error has occurred: {error.message}</p>)
    };

    if (data) {
        console.log('function Example zzz111111111 data');
        return (
      
            <div>
              <h1>{data.name}</h1>
              <p>{data.description}</p>
              <strong>{data.subscribers_count}</strong>
              <strong>{data.stargazers_count}</strong>
              <strong>{data.forks_count}</strong>
            </div>)
    } else {
        return null;
    }
}

function useMeeReactQuery(arg_texture: string = '') {
    const [texture, setTexture] = useState(arg_texture);
    // return [texture, setTexture] as const;

    const [status, setStatus] = useState('Loading hook...');

    useEffect(() => {
        new Promise(function() {
            setTimeout(() => setStatus('Loaded hook.'), 2222);
        });
    }, []);

    const asynSet = (text: string) => {
        new Promise(function() {
            setStatus('Fetching hook ...');
            setTimeout(() => { setStatus('Fetched hook');setTexture(text)}, 2222);
        });
        console.log('wating promise to resolve.......');
    };

    // return [texture, asynSet] as const;
    return {status, texture, asynSet};
}

function App({ cartId, userEmail }:{[key:string]:any}) {
    // const [texture, setTexture] = useMeeReactQuery('smooth');
    const {status, texture, asynSet: setTexture} = useMeeReactQuery('smooth');
    console.log('texture...',texture);

    return (
        <div className="App">
            <AppHeader {...{ cartId, userEmail }} />
            <main className="App__main">
                <section className="App__content">
                    <Switch>
                        <Route exact path="/">
                            <HomePage />
                        </Route>
                        <Route path="/example">
                            <Example />
                        </Route>
                        {/* <Route path="/:user">
                            <User />
                        </Route> */}
                        <Route>
                            <HomePage />
                        </Route>
                    </Switch>
                </section>
                <footer className="App__footer">
                    {/* <AppFooter /> */}ppppppp
                </footer>
            </main>
        </div>
    );
}

export default connect(mapStateToProps)(App);
