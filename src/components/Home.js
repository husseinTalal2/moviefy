import { Box, Typography } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import { useStyles } from "../Styles";
import { apiUtils } from "./API";
import { MovieContext } from "./MovieContext";
import MoviesGrid from "./MoviesGrid";

function Home() {
    const classes = useStyles();
    //const [movies, setMovies] = useState([]);
    const [state, dispatch] = useContext(MovieContext);
    useEffect(() => {
        apiUtils.getAll().then((data) => {
            //setMovies(data);
            dispatch({ type: "SET_MOVIES", movies: data })
        });
    },[dispatch]);
    
    return (
        <main>
            <Box className={classes.flexCenter}>
                <Typography className={classes.title} variant="h3">
                    DISCOVER MOVIES
                </Typography>
            </Box>
            <MoviesGrid movies={state.movies} />
        </main>
    );
}

export default Home;
