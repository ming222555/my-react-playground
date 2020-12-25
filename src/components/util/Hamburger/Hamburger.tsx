import React from 'react';

import './Hamburger.scss';

/*
 *  Props
    outerClazz: string; consumer specified css class
*/
function Hamburger({ outerClazz="" }:{[key:string]:any}) {
    
    return  (
        <button className={outerClazz ? outerClazz + " Hamburger" : "Hamburger"} type="button">
            <div className="Hamburger__hams">
            </div>
        </button>
    )
}

export default Hamburger;
