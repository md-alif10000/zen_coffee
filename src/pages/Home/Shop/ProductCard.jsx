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

import "./ProductCard.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { Zoom } from "react-reveal";

const ProductCard = ({ item }) => {
  return (
    <Zoom left cascade>
      <div>
        <Paper elevation={3} className="productCard">
          <div className="left">
            <Stack spacing={1}>
              <h3>{item.name}</h3>
              <p>{item.shortDescription}</p>

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
            <p>{item.description}</p>
          </div>
        </Paper>
      </div>
    </Zoom>
  );
};

export default ProductCard;
