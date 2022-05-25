import { Add } from "@mui/icons-material";
import { Button, Paper, Stack, Step, StepLabel, Stepper } from "@mui/material";
import { useState } from "react";
import Layout from "../../components/Layout/Layout";
import AddressForm from "./AddressForm";
import "./Checkout.css";
import Review from "./Review";
import MyStepper from "./Stepper";

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);

  const activeStepComponent = () => {
    switch (activeStep) {
      case 0:
        return (
          <AddressForm activeStep={activeStep} setActiveStep={setActiveStep} />
        );
      case 1:
        return <Review activeStep={activeStep} setActiveStep={setActiveStep} />;
      default:
        return <p>No step</p>;
    }
  };

  const submitHandler = () => {
    setActiveStep(activeStep + 1);
  };

  return (
    <Layout>
      <div className="checkout">
        <Paper
          className="checkoutContainer"
          elevation={3}
          style={{ width: "600px" }}
        >
          <Stack spacing={0}>
            <MyStepper activeStep={activeStep} />
            {activeStepComponent()}

            <Button
              style={{ margin: "10px 0" }}
              size="large"
              variant="contained"
              fullWidth
              color="primary"
              onClick={submitHandler}
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
