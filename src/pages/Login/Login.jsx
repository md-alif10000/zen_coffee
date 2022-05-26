import { Button, Paper, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/Layout/Layout";
import "./Login.css";
import { login } from "../../redux/actions/userAction";
import { Navigate } from "react-router";
import {Zoom} from 'react-reveal'

const Login = () => {
  const dispatch = useDispatch();
  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const [errors, setErrors] = useState({
    email: false,
    name: false,
  });

  const loginHandler = (e) => {
    e.preventDefault();

    console.log(email);
    console.log(password);

    dispatch(login(email, password));
  };

  if(isAuthenticated) return  <Navigate to={"/"} />;

  return (
    <Layout>
      <div className="login">
      <Zoom cascade>
        <Paper elevation={2} className="loginFormContainer">
          <Stack spacing={2}>
            <Typography variant="h3" textAlign={"center"}>
              Login
            </Typography>
            <TextField
              id="filled-hidden-label-normal"
              variant="filled"
              label="Email Address"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
            <TextField
              onChange={(e) => setpassword(e.target.value)}
              value={password}
              label="Password"
              id="filled-hidden-label-normal"
              variant="filled"
            />

            <Button
              color="primary"
              variant="contained"
              size="md"
              onClick={loginHandler}
            >
              Login
            </Button>
            <Typography textAlign="center">Do't have an account?</Typography>

            <Button
              fullWidth
              href="/sign-up"
              color="primary"
              variant="outlined"
              size="md"
            >
              Sign Up
            </Button>
          </Stack>
        </Paper>
        </Zoom>
      </div>
    </Layout>
  );
};

export default Login;
