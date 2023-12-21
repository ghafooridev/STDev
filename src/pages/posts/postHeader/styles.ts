import { makeStyles } from "tss-react/mui"

export const useStyles = makeStyles()(theme => ({
	header: {
		marginBottom: 60,
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		"& .button": {
			color: "#fff",
			cursor: "pointer",
			borderRadius: 10
		}
	}
}))
