import { makeStyles } from "tss-react/mui"

export const useStyles = makeStyles()(theme => ({
    root: {
        margin: '0 280px',
        [theme.breakpoints.down('lg')]: {
            margin: "0 50px"
        },
        [theme.breakpoints.down('sm')]: {
            margin: "0 5px"
        },
        backgroundColor: "#F6F6F6"
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
        padding: 10,
        width: "auto",
        boxShadow: "0px 2px 2px 0px rgba(154, 154, 154, 0.25)"
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
