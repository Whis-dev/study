import axios from 'axios';

const BASE_URL = 'https://yts.am/api/v2'
const REQUEST_ALL_MOVIES_URL = BASE_URL + '/list_movies.json'
const REQUEST_MOVIE_DETAILS_URL = BASE_URL + '/movie_details.json'
const REQUEST_MOVIE_SUGGESTIONS_URL = BASE_URL + '/movie_suggestions.json'

export const getMovies = async (limit, minimum_rating) => {
    const { 
        data: {
            data: {
                movies
            }
        }
    } = await axios(REQUEST_ALL_MOVIES_URL, {
        params: {
            limit,
            minimum_rating
        }
    })

    return movies;
}

export const getMovie = async movie_id => {
    const {
        data: {
            data: {
                movie
            }
        }
    } = await axios(REQUEST_MOVIE_DETAILS_URL, {
        params: {
            movie_id
        }
    })

    return movie;
}

export const getSuggestions = async movie_id => {
    const {
        data: {
            data: {
                movies
            }
        }
    } = await axios(REQUEST_MOVIE_SUGGESTIONS_URL, {
        params: {
            movie_id
        }
    })

    return movies;
}