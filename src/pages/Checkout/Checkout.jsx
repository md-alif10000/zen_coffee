import { Button, Paper, Stack, Step, StepLabel, Stepper } from "@mui/material";
import React from "react";
import Layout from "../../components/Layout/Layout";
import AddressForm from "./AddressForm";
import "./Checkout.css";
import Review from "./Review";
import MyStepper from "./Stepper";

const Checkout = () => {
  return (
    <Layout>
      <div className="checkout">
        <Paper
          className="checkoutContainer"
          elevation={3}
          style={{ width: "800px" }}
        >
          <Stack spacing={0}>
            <MyStepper />

            <AddressForm />
            {/* <Review /> */}

            <Button
              style={{ margin: "10px 0" }}
              size="large"
              variant="contained"
              fullWidth
              color="primary"
            >
              Next
            </Button>
          </Stack>
        </Paper>
      </div>
    </Layout>
  );
};

export default Checkout;
