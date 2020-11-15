import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom"; // https://github.com/marmelab/react-admin/issues/3242
import { useQuery, QueryCache, ReactQueryCacheProvider } from "react-query";


import './App.scss';
import HomePage from 'pages/HomePage/HomePage';
import AppHeader from 'layouts/AppHeader';
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

function App() {
    // const [texture, setTexture] = useMeeReactQuery('smooth');
    const {status, texture, asynSet: setTexture} = useMeeReactQuery('smooth');
    console.log('texture...',texture);

    return (

        // <ReactQueryCacheProvider queryCache={queryCache}>
        <Router>
            <Link to="/boh">Boh</Link>
            <Link to="/about">About</Link>
            <Link to="/dashboard/me">Dashboard</Link>
            <Link to="/">Home</Link>
            <div className="app">
                <AppHeader />
                <HomePage />
                <Example />
            </div>

            texture {texture} <br/>
            status {status}

            <button onClick={() => setTexture('Rough')}>Rough</button>
            <button onClick={() => setTexture('Fine')}>Fine</button>
        
            </Router>
        // </ReactQueryCacheProvider>
    );
}

export default App;
