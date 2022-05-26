import React, { useState } from "react";
import "../Account/Account.css";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import {
  Avatar,
  Button,
  IconButton,
  Input,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Layout from "../../components/Layout/Layout";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { PhotoCamera } from "@mui/icons-material";
import { logout, updateProfile } from "../../redux/actions/userAction";


const EditProfile = () => {
  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const [email, setemail] = useState(user.email);
  const [name, setname] = useState(user.name);
  const [avatar, setAvatar] = useState("");

  const [avatarPreview, setAvatarPreview] = useState("");

  const registerDataChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const updateInfo = (e) => {
    e.preventDefault();
    if (!name) return;
    if (!email) return;

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("avatar", avatar);
    dispatch(updateProfile(myForm));
  };

  return (
    <Layout>
      <div className="account">
        <div className="content">
          <Grid container spacing={2}>
            <Grid item xs={12} xl={5}>
              <Paper
                className="paper"
                style={{ padding: "20px" }}
                elevation={3}
              >
                <Stack alignItems={"center"} spacing={2}>
                  <Avatar
                    src={user?.avatar?.url}
                    style={{ width: "100px", height: "100px" }}
                  />
                  <Typography variant="body1">{user.email}</Typography>
                  <Typography variant="h6">{user.name}</Typography>

                  <Button
                    variant="outlined"
                    width="100px"
                    style={{ width: "100px", color: "red" }}

                    onClick={()=>dispatch(logout())}
                  >
                    Logout
                  </Button>
                  <Button variant="contained" style={{ width: "100px" }}>
                    Edit
                  </Button>
                </Stack>
              </Paper>
            </Grid>
            <Grid item xs={12} xl={7}>
              <Paper
                className="paper"
                elevation={3}
                style={{
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box
                  fullWidth
                  component="form"
                  noValidate={false}
                  autoComplete="off"
                  style={{ maxWidth: "400px", minWidth: "300px" }}
                >
                  <Stack spacing={1} fullWidth>
                    <Typography variant="h4" textAlign={"center"}>
                      EDIT PROFILE
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
                      size="small"
                      onChange={(e) => setname(e.target.value)}
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
                      size="small"
                      type={"email"}
                      onChange={(e) => setemail(e.target.value)}
                      value={email}
                    />

                    <Button
                      color="primary"
                      variant="contained"
                      size="md"
                      onClick={updateInfo}
                    >
                      Update Information
                    </Button>
                  </Stack>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    </Layout>
  );
};

export default EditProfile;
