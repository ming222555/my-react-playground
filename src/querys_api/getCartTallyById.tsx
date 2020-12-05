import axios from "axios";

const getCartTallyById = async (key: string, id: string) => {
    // const { data } = await axios.get( `https://api.eesyfashion.com/carts/${id}`);
    const { data } = await axios.get( `https://jsonplaceholder.typicode.com/posts/${id}`);
    return data;
};

export default getCartTallyById;
