import Header from "./Header";
import { Grid } from "@mui/material";
import { useStyles } from "./style";

interface LayoutProps {
  children: JSX.Element;
}

const Layout = (props: LayoutProps) => {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.layout}>
        <Header />
        <Grid className={classes.container}>{props.children}</Grid>
      </div>
    </div>
  );
};

export default Layout;
