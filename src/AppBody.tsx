import React from 'react';

export default function AppBody( props:{[key:string]:any}) {
    const header = props.children[0];
    const content = props.children[1];
    const footer = props.children[2];

    return (
        <React.Fragment>
            <header className="App__header">
                {header}
            </header>
            <main className="App__main">
                <section className="App__content">
                    {content}
                </section>
                <footer className="App__footer">
                    {footer}
                </footer>
            </main>
        </React.Fragment>
    );
}
