import React from 'react';

import './CartBadge.scss';

/*
 *  Props
    qty: number; Quantity of cart items.
    outerClazz: string; consumer specified css class
*/
function CartBadge({ qty, outerClazz="" }:{[key:string]:any}) {
    
    return  (
        <div className={outerClazz ? outerClazz + " CartBadge" : "CartBadge"}>
            <div className="CartBadge__icon-container">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 82.6 91.7" className="CartBadge__icon"><g fill="currentColor"><path d="M33.6 73.3c0 0 0 0 0 0 -5 0-9.2 4.1-9.2 9.2 0 5 4.1 9.2 9.2 9.2 5 0 9.2-4.1 9.2-9.2 0 0 0 0 0 0 0-5-4.2-9.2-9.2-9.2Zm0 12.4c0 0 0 0 0 0 -1.8 0-3.3-1.5-3.3-3.3 0-1.8 1.5-3.3 3.3-3.3 1.8 0 3.3 1.5 3.3 3.3 0 1.8-1.5 3.3-3.3 3.3Z"></path><path d="M64.3 73.3c-5 0-9.2 4.1-9.2 9.2 0 5 4.1 9.2 9.2 9.2 5 0 9.2-4.1 9.2-9.2 0 0 0 0 0 0 0-5-4.2-9.2-9.2-9.2Zm0 12.4c-1.8 0-3.3-1.5-3.3-3.3 0-1.8 1.5-3.3 3.3-3.3 1.8 0 3.3 1.5 3.3 3.3 0 1.8-1.5 3.3-3.3 3.3Z"></path><path d="M82 31.3c-0.6-0.7-1.4-1.2-2.3-1.2l-59.2 0 -2.5-9.6c-0.3-1.3-1.5-2.2-2.9-2.2l-12.2 0c-1.6 0-3 1.3-3 3 0 1.6 1.3 3 3 3l9.9 0 2.5 9.5c0 0.1 0 0.1 0 0.2l9.2 35.3c0.3 1.3 1.5 2.2 2.9 2.2l43.1 0c1.3 0 2.5-0.9 2.9-2.2l9.2-35.3c0.2-0.9 0-1.8-0.5-2.6Zm-13.8 34.2l-38.5 0 -7.6-29.4 53.8 0 -7.6 29.4Z"></path></g></svg>
            </div>
            <p className={qty ? 'CartBadge__qty-container' : 'CartBadge__qty-container empty'} >
                <span className="CartBadge__qty">{ qty }</span>
            </p>
        </div>
    )
}

export default React.memo(CartBadge);
