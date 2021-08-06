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

apiUtils.getMovieImg = async (id) => {
    const img = await axios.get(
        `${BASE_URL}movie/${id}/images?api_key=${API_KEY}`
    );

    return img.data.backdrops[0].file_path;
};
