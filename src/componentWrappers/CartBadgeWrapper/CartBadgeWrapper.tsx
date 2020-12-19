import React, { useState, useEffect } from 'react';
import { useStore } from 'react-redux';
import watch from 'redux-watch';
import { useQueryCache } from "react-query";
import { AxiosResponse } from "axios";

import INEW_CART_ITEM from "ducks/../../backend/src/interfaces/INEW_CART_ITEM.interface";
import CartBadge from 'components/util/CartBadge/CartBadge';
import useCartQty, { queryKey } from 'react-querys/query/cartQty';
import useItemsPost from 'react-querys/mutation/carts/itemsPost';
import { NEW_CART_ITEM_NAMESPACE_KEY } from 'ducks/redux-utils/types';
import Spinner from 'components/util/Modals/ModalOfSpinner/ModalOfSpinner';
import TextModal from 'components/util/Modals/ModalOfText/ModalOfText';
import ToastModal from 'components/util/Modals/ModalOfToast/ModalOfToast';

function CartBadgeWrapper({ cartId, outerClazz }:{[key:string]:any}) {
    const { status, data, error } = useCartQty( cartId);
    const store = useStore();
    const cache = useQueryCache();
    
    let qty = data ? data.qty : 0;

    if ( status === "error" ) {
        // TODO error
        console.log('Error',(error as {message: string}).message);
    }

    // isServerProcessing stages ... 'false','true','done'
    const [ isServerProcessing, setisServerProcessing] = useState( 'false');

    const [ isServerError, setIsServerError] = useState( false);
    const [ isServerSuccess, setIsServerSuccess] = useState( false);

    const [mutateAddCartItem] = useItemsPost(
        () => {
            setisServerProcessing( 'true')
        },
        ( data: AxiosResponse<INEW_CART_ITEM>) => {
            setIsServerSuccess( true)
            // console.log( 'itemName', data.data.itemName);
        },
        (err: any, variables: any, previousValue: any) => {
            setIsServerError( true)
        },
        () => {
            setisServerProcessing( 'done');
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
            <CartBadge qty={qty} outerClazz={outerClazz} />
            {isServerProcessing === 'false' ? null :
                isServerProcessing === 'true' ? <Spinner /> : 
                null
            }
            {isServerError ? <TextModal texts={['Server error while adding to cart']} error dismissCallback={() => setIsServerError( false)} /> : null}
            {isServerSuccess ? <ToastModal texts={['Item xxx successfully added to cart']} dismissCallback={() => setIsServerSuccess( false)} /> : null}
        </React.Fragment>
    );
}

export default React.memo(CartBadgeWrapper);
