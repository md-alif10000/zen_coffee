import { Grid, FormControl, TextField, Typography } from "@mui/material";
import React from "react";

const AddressForm = () => {
  return (
    <>
      <Typography variant="h4" textAlign={"center"} gutterBottom>
        Shipping address
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="First Name"
            name="firstName"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Last Name"
            name="lastName"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Address line 1"
            name="addressLine1"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Address line 2"
            name="addressLine2"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Postal/Zip Code"
            name="postalZipCode"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="City" name="city" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Province"
            name="province"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Country"
            name="country"
            variant="outlined"
            fullWidth
          />
        </Grid>
      </Grid>
    </>
  );
};

export default AddressForm;
