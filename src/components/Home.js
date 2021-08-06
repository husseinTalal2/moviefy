import { Box, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useStyles } from "../Styles";
import { apiUtils } from "./API";
import MoviesGrid from "./MoviesGrid";

function Home() {
    const classes = useStyles();
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        apiUtils.getAll().then((data) => {
            setMovies(data);
        });
    },[]);

    return (
        <main>
            <Box className={classes.flexCenter}>
                <Typography className={classes.title} variant="h3">
                    Discover movies
                </Typography>
            </Box>
            <MoviesGrid movies={movies} />
        </main>
    );
}

export default Home;
