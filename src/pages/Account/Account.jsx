import React from "react";
import "./Account.css";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Avatar, Button, Stack, Typography } from "@mui/material";
import Layout from "../../components/Layout/Layout";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/userAction";
import { Link } from "react-router-dom";
const Account = () => {
  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const boxStyle = {
    height: "100px",
    borderRadius: "20px",
    padding: "20px",
    backgroundColor: "primary.main",
    "&:hover": {
      backgroundColor: "primary.main",
    },
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
                    alt="profile picture"
                    src={user.avatar?.url}
                    style={{ width: "100px", height: "100px" }}
                    elevation={2}
                  />
                  <Typography variant="body1">{user.email}</Typography>
                  <Typography variant="h6">{user.name}</Typography>

                  <Button
                    variant="outlined"
                    width="100px"
                    style={{ width: "100px", color: "red" }}
                    onClick={() => dispatch(logout())}
                  >
                    Logout
                  </Button>
                  <Button
                    href="/edit-profile"
                    variant="contained"
                    style={{ width: "100px" }}
                  >
                    Edit
                  </Button>
                </Stack>
              </Paper>
            </Grid>
            <Grid item xs={12} xl={7}>
              <Paper
                className="paper"
                style={{ padding: "20px" }}
                elevation={3}
              >
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <Link to="/orders">
                      <Box sx={boxStyle} textAlign="center">
                        <Typography variant="h6"> Orders </Typography>
                      </Box>
                    </Link>
                  </Grid>
                  <Grid item xs={6}>
                    <Link to="/change-password">
                      <Box sx={boxStyle} textAlign="center">
                        <Typography variant="h6"> Change Password </Typography>
                      </Box>
                    </Link>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    </Layout>
  );
};

export default Account;
