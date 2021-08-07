import axios from "axios";
const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "ebc39198ae35521bdfde6de282d22d31";

export const apiUtils = {};

apiUtils.getAll = async () => {
    const movies = await axios.get(
        BASE_URL + "discover/movie?api_key=" + API_KEY
    );
    return movies.data.results;
};

apiUtils.getMovieImgs = async (id) => {
    const imgs = await axios.get(
        `${BASE_URL}movie/${id}/images?api_key=${API_KEY}`
    );
        //console.log(imgs.data);
    return imgs.data.backdrops;
};

apiUtils.getMovie = async (id) => {
    const movie = await axios.get(
        `${BASE_URL}movie/${id}?api_key=${API_KEY}` 
    );
    
    return movie.data;
}

apiUtils.getVideos = async (id) => {
    const videos = await axios.get(
        `${BASE_URL}movie/${id}/videos?api_key=${API_KEY}` 
    );

    return videos.data.results[0].key;
}

apiUtils.search = async (query) => {
    const results = await axios.get(
        `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}` 
    );
    
    return results.data.results
}
