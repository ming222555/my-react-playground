import React, { useState, useRef, useEffect } from 'react';
import { useStore } from 'react-redux';
import watch from 'redux-watch';
import { useMutation, useQueryCache } from "react-query";
import { AxiosResponse } from "axios";

import INEW_CART_ITEM from "ducks/../../backend/src/interfaces/INEW_CART_ITEM.interface";
import { NewCartItem, ClearCartItem } from 'ducks/newCartItem';

import CartBadge from 'components/CartBadge/CartBadge';
import useCartQty, { queryKey } from 'react-querys/query/cartQty';
import useItemsPost from 'react-querys/mutation/carts/itemsPost';
import { NEW_CART_ITEM_NAMESPACE_KEY } from 'ducks/redux-utils/types';

function CartBadgeWrapper({ cartId, defaultWidth="1rem", defaultFontSize="1rem", breakpoints }:{[key:string]:any}) {

    const { status, data, error } = useCartQty( cartId);
    const store = useStore();
    const cache = useQueryCache();
    
    let qty = data ? data.qty : 0;

    if ( status === "error" ) {
        // TODO error
        console.log('Error',(error as {message: string}).message);
    }

    // const [mutateAddCartItem] = useMutation(
    //     (item: {
    //         itemId: string,
    //         name: string,
    //         qty: number
    //     }) => axios.post('http://localhost:3001/api/carts/${cartId}/items', item),
    //     {
    //         // Optimistically update the cache value on mutate, but store
    //         // the old value and return it so that it's accessible in case of
    //         // an error
    //         /* onMutate: text => {
    //             setText('')
    //             cache.cancelQueries('todos')
    //
    //             const previousValue = cache.getQueryData('todos')
    //
    //             cache.setQueryData('todos', old => ({
    //             ...old,
    //             items: [...old.items, text],
    //             }))
    //
    //             return previousValue
    //         }, */
    //         // On failure, roll back to the previous value
    //         /* onError: (err, variables, previousValue) =>
    //             cache.setQueryData('todos', previousValue), */
    //         // After success or failure, refetch the todos query
    //         onSettled: () => {
    //             cache.invalidateQueries( [queryKey, cartId], { exact: true });
    //         },
    //     }
    // );
    
    const [mutateAddCartItem] = useItemsPost(
        null,
        ( data: AxiosResponse<INEW_CART_ITEM>) => {
            console.log( 'itemName', data.data.itemName);
        },
        null,
        () => {
            cache.invalidateQueries( [queryKey, cartId], { exact: true });
        }
    );

    useEffect(() => {
        let w = watch(store.getState, NEW_CART_ITEM_NAMESPACE_KEY);
        const unsubs = store.subscribe(w((newVal: INEW_CART_ITEM, oldVal: INEW_CART_ITEM, objectPath) => {
            // console.log('%s changed from %s to %s', objectPath, JSON.stringify(oldVal), JSON.stringify(newVal));
            mutateAddCartItem(
                newVal
            );
        }));
        return unsubs;
    }, []);

    return  (
        <React.Fragment>
            <button onClick={() => 
            store.dispatch( new NewCartItem(
                {
                    cartId,
                    itemId: 'axiosPutItemId1',
                    itemName: 'axiosPutName1',
                    qty: 19991
                }
            ))}>add cartitem</button>
            <CartBadge qty={qty} {...{ defaultWidth, defaultFontSize, breakpoints }} />
        </React.Fragment>
    );
}

export default React.memo(CartBadgeWrapper);
