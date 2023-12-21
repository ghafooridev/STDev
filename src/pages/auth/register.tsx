import { useState, ChangeEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, Container, Grid, Typography } from "@mui/material";
import { toast } from "react-toastify";
import { useStyles } from "./style";
import { RegisterInterface } from "@/constants/enum";
import FakeAvatar from "@/assets/img/FakeAvatar.png";
import TextInput from "@/components/TextInput";
import { useRegister } from "@/api/auth";
import { EMAIL_REGEX } from "@/constants";
import Button from "@/components/Button";

const Register = () => {
  const { classes } = useStyles();
  const navigate = useNavigate();
  const [state, setState] = useState<RegisterInterface>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: null,
  });

  const [error, setError] = useState<any>(null);

  const onClickLogin = () => {
    navigate("/login");
  };

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const getFormFromState = () => {
    const data = { ...state };
    const form = new FormData();
    form.append("first_name", data?.firstName);
    form.append("last_name", data?.lastName);
    form.append("email", data?.email);
    form.append("password", data?.password);
    form.append("image", data.image);
    return form;
  };

  const registerMutation = useRegister(getFormFromState());

  const validateForm = () => {
    const errors: any = {};

    if (state.firstName.trim() === "")
      errors.firstName = "First name is Required";
    if (state.lastName.trim() === "") errors.lastName = "Last name is Required";
    if (!EMAIL_REGEX.test(state.email)) errors.email = "Email is invalid";
    if (state.password.trim().length < 6)
      errors.password = "Password should have atleast 6 characters";
    if (state.password !== state.confirmPassword)
      errors.confirmPassword = "password is not match";

    if (Object.keys(errors).length) {
      setError({ ...errors });
      return false;
    }
    return true;
  };

  const onRegister = () => {
    if (validateForm()) registerMutation.mutate();
  };

  const onFileChange = (event: any) => {
    setState({ ...state, image: event.target.files[0] });
  };

  useEffect(() => {
    if (registerMutation.isSuccess) {
      setError(null);
      toast.success("successfully register");
    } else {
      setError(registerMutation.error?.response.data);
    }
  }, [registerMutation.status]);

  return (
    <div className={classes.root}>
      <Container className={classes.container} style={{ width: 781 }}>
        <Typography variant="h5" color="primary">
          Sign Up
        </Typography>

        <div className={classes.inputFile}>
          <label htmlFor="file-input">
            <Avatar
              src={state.image ? URL.createObjectURL(state.image) : FakeAvatar}
              sx={{ width: 140, height: 140 }}
            />
          </label>
          <input
            type="file"
            id="file-input"
            onChange={onFileChange}
            accept="image/png, image/jpeg"
            style={{
              visibility: "hidden",
              position: "absolute",
              width: "100%",
              height: "100%",
            }}
          />
        </div>
        <Grid className={classes.content}>
          <TextInput
            label="First Name"
            name="firstName"
            value={state.firstName}
            onChange={onChangeInput}
            error={error?.firstName}
          />
          <TextInput
            label="Last Name"
            name="lastName"
            value={state.lastName}
            onChange={onChangeInput}
            error={error?.lastName}
          />
        </Grid>
        <Grid className={`${classes.content} ${classes.half}`}>
          <TextInput
            label="Email"
            name="email"
            value={state.email}
            onChange={onChangeInput}
            error={error?.email}
            width={"49%"}
          />
        </Grid>
        <Grid className={classes.content}>
          <TextInput
            label="Password"
            name="password"
            value={state.password}
            onChange={onChangeInput}
            error={error?.password}
            type="password"
          />
          <TextInput
            label="Confirm Password"
            name="confirmPassword"
            value={state.confirmPassword}
            onChange={onChangeInput}
            error={error?.confirmPassword}
            type="password"
          />
        </Grid>
        <Grid className={classes.content}>
          <Button onClick={onRegister}>
            {registerMutation.isLoading ? "loading ..." : "Sign Up"}
          </Button>
        </Grid>
        <Grid className={classes.content}>
          <Typography>
            Already have an account? <span onClick={onClickLogin}>Log In</span>
          </Typography>
        </Grid>
      </Container>
    </div>
  );
};

export default Register;
