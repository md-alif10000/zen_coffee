import {
  Grid,
  FormControl,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Fade } from "react-reveal";
import { toast } from "react-toastify";
import { saveShippingInfo } from "../../redux/actions/cartAction";

const AddressForm = ({ activeStep, setActiveStep }) => {
  const { cartItems, shippingInfo } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const [shippingDetails, setshippingDetails] = useState({
    name: "",
    streetAddress: "",
    city: "",
    phoneNo: "",
  });

  const handleShippingDetails = () => {
    if (!shippingDetails.name) {
      return toast.warn("Name is required");
    }
    if (!shippingDetails.city) {
      return toast.warn("City is required");
    }
    if (!shippingDetails.phoneNo) {
      return toast.warn("Phone number is required");
    }
    if (!shippingDetails.phoneNo) {
      return toast.warn("Street address is required");
    }

    dispatch(saveShippingInfo(shippingDetails));
    setActiveStep(activeStep + 1);
  };

  useEffect(() => {
    setshippingDetails(shippingInfo);
  }, []);

  return (
    <Fade right>
      <Typography variant="h4" textAlign={"center"} gutterBottom>
        Shipping Details
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Full Name"
            name="firstName"
            variant="outlined"
            fullWidth
            value={shippingDetails.name}
            focused={shippingDetails.name}
            onChange={(e) =>
              setshippingDetails({ ...shippingDetails, name: e.target.value })
            }
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            label="City"
            name="addressLine1"
            variant="outlined"
            fullWidth
            focused={shippingDetails.city}
            value={shippingDetails.city}
            onChange={(e) =>
              setshippingDetails({ ...shippingDetails, city: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Phone Number"
            name="postalZipCode"
            variant="outlined"
            value={shippingDetails.phoneNo}
            focused={shippingDetails.phoneNo}
            onChange={(e) =>
              setshippingDetails({
                ...shippingDetails,
                phoneNo: e.target.value,
              })
            }
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Street Address"
            value={shippingDetails.streetAddress}
            name="addressLine2"
            variant="outlined"
            focused={shippingDetails.streetAddress}
            fullWidth
            onChange={(e) =>
              setshippingDetails({
                ...shippingDetails,
                streetAddress: e.target.value,
              })
            }
          />
        </Grid>

        <Grid item xs={12} sm={12}>
          <Button
            style={{ margin: "10px 0" }}
            size="large"
            variant="contained"
            fullWidth
            color="primary"
            onClick={handleShippingDetails}
          >
            Save Shipping Details
          </Button>
        </Grid>
      </Grid>
    </Fade>
  );
};

export default AddressForm;
