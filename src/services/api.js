import axios from "axios";


const fetchImages = async (page = 0, query) => {
    const { data } = await axios.get(`http://api.unsplash.com/search/photos`, {
        params: {
            client_id:"ijWjyKNt7NfEKBD9u9_g_GPxgVxqtsRpn_FFbW5wvNA",
            query: query,
            page: page,
            per_page: 7,
        },
    });
    return data.results;
};

export default fetchImages;