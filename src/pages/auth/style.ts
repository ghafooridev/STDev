import { makeStyles } from "tss-react/mui"

export const useStyles = makeStyles()(theme => ({
    root: {
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.palette.primary.main,
    },
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 10,
        backgroundColor: "white",
        padding: 20,
        "& h5": {
            marginBottom: 40
        },
        "& img": {
            marginBottom: 40
        },

    },
    inputFile: {
        position: "relative",
        "& input": {
            display: "none"
        },

    },
    content: {
        display: "flex",
        flexWrap: "nowrap",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        gap: 20,
        margin: '10px 0',
        "& input": {
            width: "100%"
        },
        "& button": {
            color: "#fff",
            cursor: "pointer"
        },
        "& span": {
            color: theme.palette.primary.main,
            cursor: "pointer"
        }
    },

}))
