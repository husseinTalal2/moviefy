import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiUtils } from "./API";
import { makeStyles, Grid, Typography, Box } from "@material-ui/core";
import Chip from "@material-ui/core/Chip";
import clsx from "clsx";
import MyCarousel from "./Carousel";
const useStyles = makeStyles({
    root: {
        height: "100%",
        minHeight:"calc(100vh - 3.5rem)",
        paddingInline: "1rem",
        //marginTop: "4rem",
        backgroundColor: "#4834d4",
        backgroundImage: "linear-gradient(315deg, #4834d4 0%, #0c0c0c 74%)",
    },
    chip: {
        marginRight: "1rem",
        marginTop:"1rem"
    },
    white: {
        color: "white",
    },
    topPadding: {
        paddingTop: "4rem",
    },
    img: {
        boxShadow:
            "0 5.6px 7.8px -47px rgba(255, 255, 255, 0.045),0 45px 62px -47px rgba(255, 255, 255, 0.09)",
    },
    center: {
        display: "flex",
        justifyContent: "center",
    },
    blockMargin: {
        marginBlock: "2rem",
    },
    inlinePadding:{
        paddingInline:"2rem"
    }
});
function MoviePage() {
    const classes = useStyles();
    const [movie, setMovie] = useState({});
    const [video, setVideo] = useState("");
    const [imgs, setImgs] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        apiUtils.getMovie(id).then((data) => setMovie(data));
        apiUtils.getVideos(id).then((data) => setVideo(data));
        apiUtils.getMovieImgs(id).then((data) => setImgs(data));
    }, []);
    console.log(imgs);
    return (
        <div className={classes.root}>
            <Grid
                container
                justifyContent="center"
                className={classes.topPadding}
                
            >
                <Grid item md={3} >
                    <img
                        className={classes.img}
                        src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
                        alt="movie poster"
                        width="100%"
                    />
                    <Box className={classes.blockMargin}>
                        {movie.genres != undefined
                            ? movie.genres.map((genre) => (
                                  <Chip
                                      label={genre.name}
                                      className={classes.chip}
                                  />
                              ))
                            : ""}
                    </Box>
                    <Box className={classes.blockMargin}>
                        <Typography
                            className={classes.white}
                            variant="subtitle1"
                            color="initial"
                        >
                            Release date: {movie.release_date}
                        </Typography>
                    </Box>
                </Grid>
                <Grid item md={9} className={classes.inlinePadding}>
                    <Typography
                        className={classes.white}
                        variant="h4"
                        gutterBottom
                    >
                        {movie.title}
                    </Typography>
                    <Typography
                        className={classes.white}
                        variant="body1"
                        gutterBottom
                    >
                        {movie.overview}
                    </Typography>
                    
                    <Grid item xs={12} className={clsx(classes.center, classes.blockMargin)}>
                        <MyCarousel imgs={imgs} />
                    </Grid>
                    <Grid item xs={12} className={clsx(classes.center, classes.blockMargin)}>
                        <iframe
                            width="100%"
                            height="720"
                            src={`https://www.youtube.com/embed/${video}`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default MoviePage;
