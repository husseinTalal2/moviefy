import React from "react";
import Grid from "@material-ui/core/Grid";
import MovieCard from "./MovieCard";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
    padding: {
        paddingInline: "2rem",
    },
});
function MoviesGrid({ movies }) {
    const classes = useStyles();
    return (
        <div className={classes.padding}>
            <Grid
                container
                spacing={4}
                direction="row"
                justifyContent="center"
                alignItems="center"
                alignContent="center"
            >
                {movies != undefined
                    ? movies.map((movie) => {
                          return (
                              <Grid
                                  item
                                  xs={12}
                                  md={4}
                                  lg={3}
                                  key={movie.title}
                              >
                                  <MovieCard movie={movie} />
                              </Grid>
                          );
                      })
                    : ""}
            </Grid>
        </div>
    );
}

export default MoviesGrid;
