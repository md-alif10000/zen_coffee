import {
  Button,
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
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import { myOrders } from "../../redux/actions/orderAction";
import "./orders.css";
import moment from "moment";

const Orders = () => {
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.myOrders);

  useEffect(() => {
    dispatch(myOrders());
  }, []);

  return (
    <Layout>
      <div className="orders">
        <Paper className="ordersContainer" elevation={2}>
          <Typography variant="h3" textAlign={"center"}>
            Your Orders
          </Typography>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Order No</TableCell>
                  <TableCell>Product Name</TableCell>
                  <TableCell align="right">Order Date</TableCell>
                  <TableCell align="right">Order Status</TableCell>
                  <TableCell align="right">Total Price</TableCell>
                  <TableCell align="right">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders?.map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="left">{index + 1}</TableCell>
                    <TableCell align="left">{row.orderItems[0].name}</TableCell>
                    <TableCell align="right">
                      {moment(row.createdAt).format("MMM Do YY")}
                    </TableCell>
                    <TableCell align="right">{row.orderStatus}</TableCell>
                    <TableCell align="right">{row.totalPrice}</TableCell>
                    <TableCell align="right">
                      <Link to={`/orders/${row._id}`}>
                        <Button variant="contained"> view</Button>{" "}
                      </Link>{" "}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </div>
    </Layout>
  );
};

export default Orders;
