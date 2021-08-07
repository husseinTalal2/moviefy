import React, { useContext, useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { alpha, makeStyles } from "@material-ui/core/styles";
//import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from "@material-ui/icons/Search";
import { apiUtils } from "./API";
import { MovieContext } from "./MovieContext";
import Button from '@material-ui/core/Button'
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block",
        },
    },
    search: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        "&:hover": {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing(1),
            width: "auto",
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    inputRoot: {
        color: "inherit",
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            width: "12ch",
            "&:focus": {
                width: "20ch",
            },
        },
    },
    link:{
        textDecoration:"none",
        color:"white"
    }
}));

export default function SearchAppBar() {
    const classes = useStyles();
    const [, dispatch] = useContext(MovieContext);
    const [search, setSearch] = useState("")

    const handleInput = (e) => {
        setSearch(e.target.value);
    }
    const handleSearch = () => {
        apiUtils.search(search).then(data => {
            dispatch({ type: "SET_MOVIES", movies: data })
        })
    }
    useEffect(() => {
        
        apiUtils.search(search).then(data => {
            dispatch({ type: "SET_MOVIES", movies: data })
        })

    }, [])
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography className={classes.title} variant="h6" noWrap>
                        <Link to="/" className={classes.link}>MOVIEFY</Link>
                        
                    </Typography>

                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        
                        <InputBase
                            placeholder="Search…"
                            onChange={handleInput}
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ "aria-label": "search" }}
                        />
                        <Button onClick={handleSearch} variant="text" color="inherit">
                          search
                        </Button>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}
