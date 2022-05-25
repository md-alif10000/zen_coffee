import {
  Button,
  ButtonGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import "./ProductCard.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const ProductCard = () => {
  return (
    <div>
      <Paper elevation={3} className="productCard">
        <div className="left">
          <Stack spacing={1}>
            <h3>Coffee name</h3>
            <p>Lorem ipsum dolor sit amet consectetur.</p>

            <FormControl>

              <Typography variant="body1" fontWeight={600} >    Grind Size</Typography>
          
              <RadioGroup
                row
                size="small"
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="whole"
                  control={<Radio size="small" />}
                  label="Whole "
                />
                <FormControlLabel
                  value="ground"
                  control={<Radio size="small" />}
                  label="Ground"
                />
              </RadioGroup>
            </FormControl>

            <ButtonGroup
              color="secondary"
              variant="contained"
              aria-label="outlined primary button group"
            >
              <Button color="secondary">
                <RemoveCircleOutlineIcon />{" "}
              </Button>

              <Button fullWidth>6</Button>
              <Button color="secondary">
                <AddCircleOutlineIcon />{" "}
              </Button>
            </ButtonGroup>

            <Button
              color="primary"
              fullWidth
              variant="contained"
              endIcon={<AddShoppingCartIcon />}
            >
              Add to Cart
            </Button>
          </Stack>
        </div>
        <div className="right">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
            laborum eaque, eum exercitationem ex quaerat. Maxime enim est vitae
            consequuntur.
          </p>
        </div>
      </Paper>
    </div>
  );
};

export default ProductCard;
