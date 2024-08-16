import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com"

export default async function fetchArtical(query, currentPage) {
    const response = await axios.get("/search/photos", {
        params: {
            // client_id: "YUIvku4bW3LguFm4H83_yOrnHnZJ_H-ssz1u0CBI-Kc",
            client_id: 'gLvNzQe8Y1RXwJBRQsJvw2vTmnsC8eXAwYmArd1eC8U',
            query: query,
page: currentPage,
            per_page: 9,
        },
    })

    return response.data.results;
} 
