import { makeStyles, createStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme) =>
    createStyles({
        title: {
            marginTop: "7rem",
            marginInline: "auto",
        },
        flexCenter: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
    })
);
