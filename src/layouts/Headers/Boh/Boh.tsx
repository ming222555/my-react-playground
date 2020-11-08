import React from 'react';

import './Boh.scss';

function Boh() {
    console.log('function Boh');
    return (
        <nav className="boh">
            Boh
        </nav>
    );
}

export default React.memo( Boh);
