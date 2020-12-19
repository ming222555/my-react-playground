import axios, { AxiosResponse } from "axios";
import { useMutation } from "react-query";

import INEW_CART_ITEM from "ducks/../../backend/src/interfaces/INEW_CART_ITEM.interface";

function useItemsPost( onMutate: any, onSuccess: ( data: AxiosResponse<INEW_CART_ITEM>) => any, onError: any, onSettled: any) {
    return useMutation(
        (item: INEW_CART_ITEM) => axios.post(`${process.env.REACT_APP_API_ENDPOINT}carts/${item.cartId}/items`, item),
        {
            onMutate,
            onSuccess,
            onError,
            onSettled,
        }
    );
}

export default useItemsPost;
