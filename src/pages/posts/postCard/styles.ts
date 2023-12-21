import { makeStyles } from "tss-react/mui"

export const useStyles = makeStyles()(theme => ({
	block: {
		display: "flex",
		justifyContent: "flex-start",
		alignItems: "center",
		width: "49%",
		boxShadow: "0px 2px 2px 0px rgba(154, 154, 154, 0.25)",
		marginBottom: 30,
		backgroundColor: "#fff",
		borderRadius: 10,
		"& img": {
			width: 200,
			height: 200,
			borderRadius: 4,
		},
		[theme.breakpoints.down('md')]: {
			width: "100%"
		},
	},
	content: {
		width: "100%",
		margin: '0 10px',
		display: "flex",
		flexDirection: "column",
	},
	titleWithIcons: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		flexDirection: "row",
		width: "100%"
	},
	row: {
		display: "flex",
		alignItems: "flex-start",
		justifyContent: "space-between",
		flexDirection: "column",
		margin: "5px 0"
	},
	icons: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		"& span": {
			cursor: "pointer"
		}
	},

}))
