import { makeStyles } from "tss-react/mui"

export const useStyles = makeStyles()(theme => ({
    root: {
        height: "100vh",
        width: "100%",
        backgroundColor: "#F6F6F6"
    },
    layout: {
    },
    container: {
        marginTop: 60,
    },
    header: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "white",

        width: "100%",
        maxWidth: "100% !important",
        boxShadow: "0px 2px 2px 0px rgba(154, 154, 154, 0.25)",
        padding: "10px",
        paddingLeft: "380px !important",
        paddingRight: "380px !important",
        [theme.breakpoints.down('lg')]: {
            paddingLeft: "50px !important",
            paddingRight: "50px !important",
        },
        [theme.breakpoints.down('sm')]: {
            paddingLeft: "10px !important",
            paddingRight: "10px !important",
        },

    },
    title: {
        color: theme.palette.primary.main,
        fontWeight: 700
    },
    button: {
        color: theme.palette.primary.main,
        cursor: "pointer",
    },

    img: {
        marginBottom: 40
    },
    content: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 15
    }
}))
