import { useState, ChangeEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Typography,
} from "@mui/material";
import { toast } from "react-toastify";
import { useStyles } from "./style";
import { RegisterInterface } from "@/constants/enum";
import TextInput from "@/components/TextInput";
import useLocalStorage from "@/hooks/useLocalStorage";
import { useLogin } from "@/api/auth";
import Button from "@/components/Button";

const Register = () => {
  const { classes } = useStyles();
  const navigate = useNavigate();
  const [, setToken] = useLocalStorage("token", null);
  const [, setUser] = useLocalStorage("user", null);
  const [state, setState] = useState<
    Pick<RegisterInterface, "email" | "password">
  >({
    email: "",
    password: "",
  });

  const onClickRegister = () => {
    navigate("/register");
  };

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const loginMutation = useLogin(state);

  const onLogin = () => {
    loginMutation.mutate();
  };

  useEffect(() => {
    if (loginMutation.isSuccess) {
      setToken(loginMutation.data.data.token);
      setUser(loginMutation.data.data.user);
      navigate("/posts");
    }
    if (loginMutation.isError) {
      toast.error("Bad Credentional");
    }
  }, [loginMutation]);

  return (
    <div className={classes.root}>
      <Container className={classes.container} style={{ width: 480 }}>
        <Typography variant="h5" color="primary">
          Sign In
        </Typography>

        <Grid className={classes.content}>
          <TextInput
            label="Email"
            name="email"
            value={state.email}
            onChange={onChangeInput}
          />
        </Grid>
        <Grid className={classes.content}>
          <TextInput
            label="Password"
            name="password"
            value={state.password}
            onChange={onChangeInput}
            type="password"
          />
        </Grid>
        <Grid className={classes.checkbox}>
          <FormControlLabel control={<Checkbox />} label="Remember me" />
        </Grid>
        <Grid className={classes.content}>
          <Button onClick={onLogin}>
            {loginMutation.isLoading ? "loading ..." : "Sign In"}
          </Button>
        </Grid>
        <Grid className={classes.content}>
          <Typography>
            Need an Account? <span onClick={onClickRegister}>Sign Up</span>
          </Typography>
        </Grid>
      </Container>
    </div>
  );
};

export default Register;
