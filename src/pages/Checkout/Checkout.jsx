import { Add } from "@mui/icons-material";
import { Button, Paper, Stack, Step, StepLabel, Stepper } from "@mui/material";
import { useState } from "react";
import Layout from "../../components/Layout/Layout";
import AddressForm from "./AddressForm";
import "./Checkout.css";
import Review from "./Review";
import MyStepper from "./Stepper";
import { Zoom } from "react-reveal";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../../redux/actions/orderAction";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);
  const { cartItems, shippingInfo } = useSelector((state) => state.cart);
  const { user, isAuthenticated } = useSelector((state) => state.user);
  const { success } = useSelector((state) => state.newOrder);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //  const [order, setorder] = useState({});

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );
  const varParcent = parseInt(process.env.REACT_APP_VAT);
  const vat = subtotal * 14 * 0.01;
  const shippingCharge = subtotal > 650 ? 0 : 30;

  const totalPrice = subtotal + vat + shippingCharge;
  const placeOrder = () => {
    if (!isAuthenticated) {
      return toast.error("Please Login to Place order");
    }
    const order = {
      orderItems: cartItems,
      itemsPrice: subtotal,
      totalPrice,
      shippingCharge: shippingCharge,
      paidAt: Date.now(),
      user: user._id,
      shippingInfo,
    };

    dispatch(createOrder(order));
  };

  useEffect(() => {
    if (success) {
      return navigate("/order-success");
    }
  }, [success]);

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
        <Zoom>
          <Paper
            className="checkoutContainer"
            elevation={3}
            style={{ width: "600px" }}
          >
            <Stack spacing={0}>
              <MyStepper activeStep={activeStep} />
              {activeStepComponent()}

              {activeStep == 2 && (
                <Button
                  style={{ margin: "10px 0" }}
                  size="large"
                  variant="contained"
                  fullWidth
                  color="primary"
                  onClick={placeOrder}
                >
                  Place Order
                </Button>
              )}
              {activeStep == 1 && (
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
              )}
            </Stack>
          </Paper>
        </Zoom>
      </div>
    </Layout>
  );
};

export default Checkout;
