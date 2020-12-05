import { useQuery } from "react-query";
import getCartTallyById from 'querys_api/getCartTallyById';

function useCartTally( cartId: string) {
    return useQuery(["cartTally", cartId], getCartTallyById, {
      enabled: cartId,
    });
}

export default useCartTally;
