import { useNavigate } from "react-router-dom";
import { Avatar, Container, Grid, Typography } from "@mui/material";
import { useStyles } from "./style";
import FakeAvatar from "@/assets/img/FakeAvatar.png";
import { useLogot } from "@/api/auth";
import useLocalStorage from "@/hooks/useLocalStorage";

const Header = () => {
  const { classes } = useStyles();
  const navigate = useNavigate();
  const [token, setToken] = useLocalStorage("token", null);
  const [user, setUser] = useLocalStorage("user", null);
  const logoutMutation = useLogot(token.refresh);

  const onLogout = () => {
    setToken(null);
    setUser(null);
    logoutMutation.mutate();
    navigate("/login");
  };
  return (
    <Container className={classes.header}>
      <Typography className={classes.title} variant="h6">
        Posts
      </Typography>
      <Grid className={classes.content}>
        <Avatar src={user.image ?? FakeAvatar} sx={{ width: 70, height: 70 }} />
        <Typography variant="h6">
          {user["first_name"]} {user["last_name"]}
        </Typography>
        <Typography variant="h6" className={classes.button} onClick={onLogout}>
          Logout
        </Typography>
      </Grid>
    </Container>
  );
};

export default Header;
