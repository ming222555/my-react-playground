import axios from "axios";

const getCartTallyById = async (key: string, id: string) => {
    const { data } = await axios.get( `http://localhost:3001/api/carts/${id}/tally`);
    // const { data } = await axios.get( `https://jsonplaceholder.typicode.com/posts/${id}`);
    return data;
};

export default getCartTallyById;
