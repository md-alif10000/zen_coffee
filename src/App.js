import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Shop from "./pages/Home/Shop/Shop";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Checkout from "./pages/Checkout/Checkout";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Account from "./pages/Account/Account";
import EditProfile from "./pages/EditProfile/EditProfile";
import SingleBlog from "./pages/Blog/SingleBlog";
import Orders from "./pages/Order/Orders";
import OrderDetails from "./pages/Order/OrderDetails";

function App() {
  return (
    <div className="App">
      <ToastContainer />

      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/shop" element={<Shop />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/sign-up" element={<SignUp />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/account" element={<Account />} />
          <Route exact path="/edit-profile" element={<EditProfile />} />
          <Route exact path="/blog/:id" element={<SingleBlog />} />
          <Route exact path="/orders" element={<Orders />} />
          <Route exact path="/orders/:id" element={<OrderDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
