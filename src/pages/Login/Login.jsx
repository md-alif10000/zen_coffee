import { Button, Paper, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import Layout from "../../components/Layout/Layout";
import "./Login.css"

const Login = () => {
  return (
      <Layout>
    <div className="login" >
      <Paper elevation={2} className="loginFormContainer"  >
        <Stack spacing={2} >
        <Typography variant="h3"  textAlign={"center"}>Login</Typography>
          <TextField
            id="filled-hidden-label-normal"
            variant="filled"
            label="Email Address"
          />
           <TextField
           label="Password"
            id="filled-hidden-label-normal"
            variant="filled"
          />

          <Button color="primary" variant="contained" size="md" >Login</Button>
        </Stack>
      </Paper>
    </div>
    </Layout>
  );
};

export default Login;
