import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = ({ children, footer }) => {
  return (
    <>
      <Header />
      {children}
      {footer && <Footer />}
    </>
  );
};

export default Layout;
