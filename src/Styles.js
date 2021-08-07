import { makeStyles, createStyles } from "@material-ui/core";

export const useStyles = makeStyles(() =>
    createStyles({
        title: {
            marginBlock: "7rem",
            marginInline: "auto",
        },
        flexCenter: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
    })
);
