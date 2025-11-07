const API_KEY = "a921cf07b595ff5bb31563c200b3feb8";
// with this movie database API, you're able to do thimgs like search for movies get details on movies list all of the popular movies
// now this is the base endpoint or the base url for this api : https://api.themoviedb.org/3 so if you want to send a request we send to this url
// and then slash and then whatever the operation is that we want so slash search of slash popular or slash something
const BASE_URL = "https://api.themoviedb.org/3"

// i want to get the most popukar movies
export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results
};
export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results
};