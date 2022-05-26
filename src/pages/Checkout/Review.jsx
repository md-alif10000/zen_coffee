import { Card, Divider, Grid, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import CartItem from "../Cart/CartItem";
import { Fade } from "react-reveal";

const Review = () => {
  const styles = {
    padding: "10px",
  };

  const Card = () => {
    return (
      <Grid xl={12} sm={12} xs={12} md={12}>
      
          <Paper style={styles} elevation={0}>
            <Stack direction={"row"} justifyContent="space-between">
              <Stack>
                <Typography variant="h6"> Coffee name </Typography>
                <Typography variant="subtitle1" fontSize={"13px"}>
                  QTY 10{" "}
                </Typography>
              </Stack>
              <Typography variant="h6" fontWeight={"500"}>
                $253{" "}
              </Typography>
            </Stack>
          </Paper>
     
      </Grid>
    );
  };

  return (
    <Fade cascade right>
    <div>
      <Grid container spacing={1} marginBottom="10px">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Grid>
      <Divider />
      <Divider />

      <Stack
        direction={"row"}
        justifyContent="space-between"
        style={{ padding: "5px" }}
      >
        <Typography variant="h5" fontWeight={"bold"}>
          Total
        </Typography>
        <Typography variant="h5" fontWeight={"bold"}>
          $121
        </Typography>
      </Stack>
    </div>
    </Fade>
  );
};

export default Review;
