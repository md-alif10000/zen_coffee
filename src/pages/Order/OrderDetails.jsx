import {
  Divider,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router";
import Layout from "../../components/Layout/Layout";
import { getOrderDetails } from "../../redux/actions/orderAction";
import "./orders.css";
import moment from "moment";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const OrderDetails = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  const { order } = useSelector((state) => state.orderDetails);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getOrderDetails(id));
  }, [id]);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return (
    <Layout>
      <div className="order">
        <Paper elevation={2} className="orderContainer">
          <Typography variant="h3" textAlign={"center"}>
            Order Information
          </Typography>
          <Typography variant="h6" textAlign={"center"}>
            ID:{order?._id}
          </Typography>
          <Divider />
          <Stack direction={"row"} justifyContent="space-between">
            <Typography variant="h6">Ordered At</Typography>
            <Typography variant="h6">
              {moment(order?.createdAt).format("MMMM Do YYYY, h:mm:ss a")}{" "}
            </Typography>
          </Stack>

          <Divider />
          <Stack direction={"row"} justifyContent="space-between">
            <Typography variant="h6">Status</Typography>
            <Typography variant="h6">{order?.orderStatus}</Typography>
          </Stack>
          <Divider />

          <Typography variant="h6" fontWeight={"bold"} >Shipping Details</Typography>
          <Divider />

          <Stack direction={"row"} justifyContent="space-between">
            <Typography variant="h6">City</Typography>
            <Typography variant="h6">{order?.shippingInfo?.city}</Typography>
          </Stack>
          <Stack direction={"row"} justifyContent="space-between">
            <Typography variant="h6">Street Address</Typography>
            <Typography variant="h6">
              {order?.shippingInfo?.streetAddress}
            </Typography>
          </Stack>
          <Stack direction={"row"} justifyContent="space-between">
            <Typography variant="h6">Phone Number</Typography>
            <Typography variant="h6">{order?.shippingInfo?.phoneNo}</Typography>
          </Stack>
          <Divider />

          <Typography variant="h5" textAlign={"left"}>
            Order Items
          </Typography>

          <TableContainer component={Paper} style={{fontSize:"17px"}} >
            <Table aria-label="simple table"  >
              <TableHead>
                <TableRow>
                  <TableCell>Product No</TableCell>
                  <TableCell>Product Name</TableCell>
                  <TableCell align="right">Quantity</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Total Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {order?.orderItems?.map((row, index) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="left">{index + 1}</TableCell>
                    <TableCell align="left">{row.name}</TableCell>
                    <TableCell align="right">{row.quantity}</TableCell>
                    <TableCell align="right">{row.price}</TableCell>
                    <TableCell align="right">
                      {row.quantity * row.price}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Divider />
          <Stack direction={"row"} justifyContent="space-between">
            <Typography variant="h6">Vat</Typography>
            <Typography variant="h6"> {order?.vat} </Typography>
          </Stack>
          <Divider />
          <Stack direction={"row"} justifyContent="space-between">
            <Typography variant="h6">Shipping Charge</Typography>
            <Typography variant="h6"> {order?.shippingCharge}</Typography>
          </Stack>
          <Divider />
          <Stack direction={"row"} justifyContent="space-between">
            <Typography variant="h6" fontWeight={"bold"} >Total Price</Typography>
            <Typography variant="h6" fontWeight={"bold"} > {order?.totalPrice}</Typography>
          </Stack>
        </Paper>
      </div>
    </Layout>
  );
};

export default OrderDetails;
