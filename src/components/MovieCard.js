import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Box, Chip } from "@material-ui/core";
import yellow from '@material-ui/core/colors/yellow';
const useStyles = makeStyles({
    root: {
        minWidth: "100%",
        minHeight:"27.5rem",
        boxShadow:
        "0 2.8px 2.2px rgba(0, 0, 0, 0.014),0 6.7px 5.3px rgba(0, 0, 0, 0.02),0 12.5px 10px rgba(0, 0, 0, 0.025),0 22.3px 17.9px rgba(0, 0, 0, 0.03),0 41.8px 33.4px rgba(0, 0, 0, 0.036),0 100px 80px rgba(0, 0, 0, 0.05)",
        borderRadius:"10px"
    },
    media: {
        minHeight: "15rem",
    },
    flexBetween:{
        display: "flex",
        justifyContent:"space-between",

    },
    yellow:{
        backgroundColor:yellow[600]
    },
    space:{
        padding:"1.5rem"
    },
    fullHeight:{
        height:"100%"
    }
});

function MovieCard({ movie }) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea href={`movie/${movie.id}`} className={classes.fullHeight}>
                <CardMedia
                    className={classes.media}
                    image={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
                    title={movie.title}
                />
                <CardContent className={classes.space}>
                    <Box className={classes.flexBetween} >
                        <Typography gutterBottom variant="h5" component="h2">
                        {movie.title}
                        </Typography>
                        <Chip label={movie.vote_average} className={classes.yellow} />
                    </Box>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                    >
                        {movie.overview.substring(0, 150) + "..."}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default MovieCard;
