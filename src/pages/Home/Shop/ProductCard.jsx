import {
  Button,
  ButtonGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextField,
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
              <InputLabel id="demo-simple-select-helper-label">
                Grind Size
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
                label="Grind Size"
                // onChange={handleChange}
                size="small"
              >
                <MenuItem value={10}>Whole Bean</MenuItem>
                <MenuItem value={20}>Grounded</MenuItem>
              </Select>
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
