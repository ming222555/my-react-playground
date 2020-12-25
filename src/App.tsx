import React, { useState, useEffect } from 'react';
import { useQuery, QueryCache } from "react-query";
import { connect } from 'react-redux';
import { Route, Switch, Link } from "react-router-dom";

import './App.scss';
import HomePage from 'pages/HomePage/HomePage';
import SomePage from 'pages/SomePage/SomePage';
import PrimaryHeader from 'layouts/Headers/PrimaryHeader/PrimaryHeader';
import AppBody from './AppBody';
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

// function App({ cartId, userEmail }:{[key:string]:any}) {
//     // const [texture, setTexture] = useMeeReactQuery('smooth');
//     const {status, texture, asynSet: setTexture} = useMeeReactQuery('smooth');
//     console.log('texture...',texture);
//
//     return (
//         <div className="App"> <Link to="/somePage">somePage</Link>
//             <Switch>
//                 <Route exact path="/">
//                     <AppHeader>
//                         <PrimaryHeader {...{ cartId, userEmail }} />
//                     </AppHeader>
//                     <main className="App__main">
//                         <section className="App__content">
//                             <HomePage />
//                         </section>
//                         <footer className="App__footer">
//                             {/* <AppFooter /> */}
//                         </footer>
//                     </main>
//                 </Route>
//                 <Route path="/somePage">
//                     <AppHeader>
//                         <PrimaryHeader {...{ cartId, userEmail }} />               {/* <SomePageHeader /> */}
//                     </AppHeader>
//                     <main className="App__main">
//                         <section className="App__content">
//                             <SomePage />
//                         </section>
//                         <footer className="App__footer">
//                             {/* <SomePageFooter /> */}
//                         </footer>
//                     </main>
//                 </Route>
//             </Switch>
//         </div>
//     );
// }

function App({ cartId, userEmail }:{[key:string]:any}) {
    // const [texture, setTexture] = useMeeReactQuery('smooth');
    const {status, texture, asynSet: setTexture} = useMeeReactQuery('smooth');
    console.log('texture...',texture);

    return (
        <div className="App"> {/* <Link to="/somePage">somePage</Link> */}
            <Switch>
                <Route exact path="/">
                    <AppBody>
                        <PrimaryHeader {...{ cartId, userEmail }} /> {/* header */}
                        <HomePage />                                 {/* content */}
                        {null}                                       {/* footer */}
                    </AppBody>
                </Route>
                <Route path="/somePage">
                    <AppBody>
                        <PrimaryHeader {...{ cartId, userEmail }} />
                        <SomePage />
                        {null}
                    </AppBody>
                </Route>
            </Switch>
        </div>
    );
}

export default connect(mapStateToProps)(App);
