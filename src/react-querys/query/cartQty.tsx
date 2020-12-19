import axios from "axios";
import { useQuery } from "react-query";

import ICART_QTY from "ducks/../../backend/src/interfaces/ICART_QTY.interface";

const cartQty = async (key: string, id: string) => {
    const { data } = await axios.get<ICART_QTY>( `${process.env.REACT_APP_API_ENDPOINT}carts/${id}/get/qty`);
    return data;
};

export const queryKey = 'cartQty';

function useCartQty( cartId: string) {
    return useQuery([queryKey, cartId], cartQty, {
      enabled: cartId,
    });
}

export default useCartQty;
