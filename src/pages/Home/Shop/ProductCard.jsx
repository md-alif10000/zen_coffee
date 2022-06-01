import {
  Button,
  ButtonGroup,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";

import "./ProductCard.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { Zoom } from "react-reveal";
import { useDispatch } from "react-redux";
import { addItemsToCart } from "../../../redux/actions/cartAction";
import { toast } from "react-toastify";

const ProductCard = ({ item }) => {
  const [grindSize, setgrindSize] = useState("");
  const [quantity, setquantity] = useState(1);

  const dispatch = useDispatch();

  const addItemToCart = (product) => {
    if (!grindSize) {
      return toast.warn("Please select grind size");
    }

    dispatch(addItemsToCart({ ...item, quantity, grindSize }));
  };
  return (
    <Zoom  cascade>
      <div>
        <Paper elevation={3} className="productCard">
          <div className="left">
            <Stack spacing={1}>
              <h3>{item.name}</h3>
              <p>{item.shortDescription}</p>
              <Stack direction={"row"}  alignItems="center" >
                <Typography variant="" fontSize={"18px"} fontWeight={"bold"}>
                  Price: 
                </Typography>
                <Typography variant="h6" color={"primary"}>
                  {"  "}
                   $ {item.price}{" "}
                </Typography>
              </Stack>

              <FormControl>
                <InputLabel id="demo-simple-select-helper-label">
                  Grind Size
                </InputLabel>
                <Select
                  value={grindSize}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={age}
                  label="Grind Size"
                  // onChange={handleChange}
                  size="small"
                  onChange={(e) => setgrindSize(e.target.value)}
                >
                  <MenuItem value={"whole"}>Whole Bean</MenuItem>
                  <MenuItem value={"grounded"}>Grounded</MenuItem>
                </Select>
              </FormControl>
              <ButtonGroup
                color="secondary"
                variant="contained"
                aria-label="outlined primary button group"
              >
                <Button
                  color="secondary"
                  onClick={() => setquantity(quantity - 1)}
                >
                  <RemoveCircleOutlineIcon />{" "}
                </Button>

                <Button fullWidth>{quantity}</Button>
                <Button
                  color="secondary"
                  onClick={() => setquantity(quantity + 1)}
                >
                  <AddCircleOutlineIcon />{" "}
                </Button>
              </ButtonGroup>

              <Button
                color="primary"
                fullWidth
                variant="contained"
                endIcon={<AddShoppingCartIcon />}
                onClick={addItemToCart}
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
