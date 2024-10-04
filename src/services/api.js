import axios from "axios";


export default function fetchImages= async (page = 0, query) => {
    const { data } = await axios.get();
    return data;
};