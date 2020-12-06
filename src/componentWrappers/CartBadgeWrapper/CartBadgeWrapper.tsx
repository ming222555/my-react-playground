import React, { useState, useRef, useEffect } from 'react';

import CartBadge from 'components/CartBadge/CartBadge';
import useCartTally from 'react-querys/cartTally';

function CartBadgeWrapper({ cartId, defaultWidth="1rem", defaultFontSize="1rem", breakpoints }:{[key:string]:any}) {

    const { status, data, error } = useCartTally( cartId);

    let qty = data ? data.qty : 0;
    // let qty = data ? data.title : 0; // https://jsonplaceholder.typicode.com/posts/4

    if ( status === "error" ) {
        // TODO error
        console.log('Error',(error as {message: string}).message);
    }

    return  (
        <CartBadge qty={qty} {...{ defaultWidth, defaultFontSize, breakpoints }} />
    );
}

export default React.memo(CartBadgeWrapper);
