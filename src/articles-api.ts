import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com"

export interface ImageResult {
    id: string;
    urls: {
        regular: string;
        small: string;
        thumb: string;
    };
    alt_description: string;
    [key: string]: any; 
}

export interface FetchArticalResponse {
    results: ImageResult[];
    total: number;
    total_pages: number;
}


export default async function fetchArtical(query: string, currentPage: number): Promise<FetchArticalResponse> {
    const response = await axios.get<FetchArticalResponse>("/search/photos", {
        params: {
            // client_id: "YUIvku4bW3LguFm4H83_yOrnHnZJ_H-ssz1u0CBI-Kc",
            client_id: 'gLvNzQe8Y1RXwJBRQsJvw2vTmnsC8eXAwYmArd1eC8U',
            query: query,
page: currentPage,
            per_page: 9,
        },
    })

    return response.data;
} 
