import fetch from "node-fetch";
import querystring from 'querystring';

const API_URL = "https://yts.am/api/v2/list_movies.json?"

export const getMovies = (limit, minimum_rating) => {
    const queryData = querystring.stringify({ limit, minimum_rating });
    const REQUEST_URL = API_URL + queryData;

    return fetch(REQUEST_URL)
        .then(res => res.json())
        .then(json => json.data.movies);
}

