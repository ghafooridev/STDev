import { makeStyles } from "tss-react/mui"

export const useStyles = makeStyles()(theme => ({
	container: {
		width: "100%",
		maxWidth: "100% !important",
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
	content: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-between",
		gap: "2%",
		"& nav": {
			width: "100%",
			"& ul": {
				display: "flex",
				justifyContent: "center"
			}
		},
		[theme.breakpoints.down('md')]: {
			flexDirection: "column",
			width: "100%"
		},
	},
	modal: {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: 520,
		backgroundColor: "#fff",
		padding: 30,
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		borderRadius: 10,
		"& .buttons": {
			marginTop: 30,
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			gap: 20,
			justifyContent: "stretch",
			"& button": {
				width: 187,
				cursor: "pointer"
			},
			"& span": {
				cursor: "pointer"
			}
		}
	}
}))
