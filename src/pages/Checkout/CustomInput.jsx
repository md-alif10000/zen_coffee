import { Grid, TextField } from '@mui/material'
import React from 'react'

const CustomInput = () => {
  return (
    <Grid item xs={12} sm={6}>
    <Controller
      as={TextField}
      name={name}
      control={control}
      label={label}
      fullWidth
      required={required}
      error={isError}
    />
  </Grid>
  )
}

export default CustomInput