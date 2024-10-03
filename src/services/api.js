import axios from "axios";


export default function fetchImages= async () => {
    const { data } = await axios.get();
    return data;
};