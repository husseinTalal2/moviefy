import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
    link:{
        paddingInline: "2rem",
        textDecoration:"none",
        color:"#fff"
    }
});
function Navbar() {
    const classes = useStyles();
    return (
        <AppBar position="fixed" color="primary">
            <Toolbar>
                <Typography variant="h6">MOVIEFY</Typography>
                <Typography variant="body1">
                    <Link to="/" className={classes.link}>Home</Link>
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
