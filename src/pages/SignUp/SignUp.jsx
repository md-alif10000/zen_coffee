import { PhotoCamera } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  FormControl,
  IconButton,
  Input,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { redirect, useNavigate, Navigate, Navigator } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import { register } from "../../redux/actions/userAction";
import ProfileImage from "../../assets/profile.jpg";
import { Zoom } from "react-reveal";

import "../Login/Login.css";

const SignUp = ({ history, location }) => {
  const dispatch = useDispatch();

  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { name, email, password, confirmPassword } = user;

  const [errors, setErrors] = useState({
    email: false,
    name: false,
    password: false,
    confirmPassword: false,
  });

  const [avatar, setAvatar] = useState(ProfileImage);
  const [avatarPreview, setAvatarPreview] = useState("/Profile.png");

  const validateForm = () => {
    const newData = {};
    if (!name) {
      setErrors({ ...errors, name: true });
    }
    if (!email) {
      setErrors({ ...errors, email: true });
    }
    if (!password) {
      setErrors({ ...errors, password: true });
    }
    if (!confirmPassword) {
      setErrors({ ...errors, confirmPassword: true });
    }
    // if (password !== confirmPassword) {
    //   setErrors({ ...errors, confirmPassword: true });
    // }
  };

  const registerSubmit = (e) => {
    e.preventDefault();

    validateForm();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("password", password);
    myForm.set("avatar", avatar);
    dispatch(register(myForm));
  };

  const registerDataChange = (e) => {
    validateForm();
    if (e.target.name === "avatar") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

  const redirect = location?.search
    ? location?.search.split("=")[1]
    : "/account";

  useEffect(() => {
    if (error) {
      // toast.error(error);
    }

    if (isAuthenticated) {
      <Navigate to={"/"} />;
    }
  }, [dispatch, history, isAuthenticated, redirect]);
  if (isAuthenticated) return <Navigate to={"/"} />;

  return (
    <Layout footer={false}>
      <div className="login">
        <Zoom>
          <Paper elevation={2} className="loginFormContainer">
            <Box
              component="form"
              noValidate={false}
              autoComplete="off"
              fullWidth
            >
              <Stack spacing={2} fullWidth>
                <Typography variant="h3" textAlign={"center"}>
                  Sign Up
                </Typography>

                <Stack alignItems={"center"}>
                  <Avatar
                    style={{ alignSelf: "center" }}
                    textAlign="center"
                    alt="Remy Sharp"
                    src={avatarPreview}
                    sx={{ width: 76, height: 76 }}
                  />

                  <label htmlFor="icon-button-file" textAlign={"center"}>
                    <Input
                      accept="image/*"
                      id="icon-button-file"
                      type="file"
                      style={{ display: "none" }}
                      name="avatar"
                      onChange={registerDataChange}
                    />
                    <IconButton
                      color="primary"
                      aria-label="upload picture"
                      component="span"
                    >
                      <PhotoCamera />
                    </IconButton>
                  </label>
                </Stack>

                <TextField
                  fullWidth
                  id="filled-hidden-label-normal"
                  variant="filled"
                  label="Full Name"
                  name="name"
                  onChange={registerDataChange}
                  value={name}
                  required
                  error={!name}
                />

                <TextField
                  error={!email}
                  id="filled-hidden-label-normal"
                  variant="filled"
                  label="Email Address"
                  name="email"
                  onChange={registerDataChange}
                  value={email}
                />
                <TextField
                  error={!password}
                  label="Password"
                  id="filled-hidden-label-normal"
                  variant="filled"
                  name="password"
                  onChange={registerDataChange}
                  value={password}
                />
                <TextField
                  error={!confirmPassword || password !== confirmPassword}
                  label="Confirm Password"
                  id="filled-hidden-label-normal"
                  variant="filled"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={registerDataChange}
                />

                <Button
                  color="primary"
                  variant="contained"
                  size="md"
                  onClick={registerSubmit}
                >
                  Sign Up
                </Button>
              </Stack>
            </Box>
            <Typography textAlign="center">Already have an account?</Typography>

            <Button
              fullWidth
              color="primary"
              href="/login"
              variant="outlined"
              size="md"
            >
              Login
            </Button>
          </Paper>
        </Zoom>
      </div>
    </Layout>
  );
};

export default SignUp;
