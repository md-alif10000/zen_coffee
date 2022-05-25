import { useState } from "react";
import "./Header.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Button, Drawer, List, ListItem, Stack, Link } from "@mui/material";
import WidgetsIcon from "@mui/icons-material/Widgets";
import { Link as RouterLink } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
  const [drawerOpen, setdrawerOpen] = useState(false);
  return (
    <header className="header">
      <Drawer
        anchor={"left"}
        open={drawerOpen}
        onClose={() => setdrawerOpen(false)}
      >
        <div className="sideDrawer">
          <div className="drawerClose" onClick={()=>setdrawerOpen(false)} >

            <CloseIcon/>
          </div>
          <div className="logo">
          <img src="./images/logo.svg" alt="" />
          </div>
          <div className="links">
            <List 
             sx={{
              width: '100%',
              fontSize:"20"
         
            }}>
              <ListItem>
                <Link href="/" underline="none">
                  Home
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/shop" underline="none">
                  Shop
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/about" underline="none">
                  About US
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/contact" underline="none">
                  Contact US
                </Link>
              </ListItem>
            </List>
          </div>
        </div>
      </Drawer>
      <div className="container">
        <div className="left">
          <div className="menuIcon" onClick={() => setdrawerOpen(true)}>
            <WidgetsIcon />
          </div>
          <div className="logo">
            <RouterLink to={"/"}>
              <img src="./images/logo.svg" alt="" />
            </RouterLink>
          </div>
        </div>
        <div className="center">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/shop">Shop</RouterLink>
          <RouterLink to="/about">About</RouterLink>

          <RouterLink to="/contact">Contact</RouterLink>
          <RouterLink to="/">Wholesale</RouterLink>
        </div>
        <div className="right">
          <RouterLink to={"/cart"} className="cartIcon">
            <AiOutlineShoppingCart className="icon" />
          </RouterLink>

          <Stack spacing={2} direction="row">
            <Button href="/login" variant="contained">
              <span className="btnText">Login</span>
              
            </Button>
            <Button href="/sign-up" variant="contained">
            <span className="btnText">Sign up</span>
          
            </Button>
          </Stack>
        </div>
      </div>
    </header>
  );
};

export default Header;
