import React from "react";
import PropTypes from "prop-types";

import Footer from "../footer/footer.component";
import Header from "../header/header.component";
import { AppContainer } from "../../styles/app.styles";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <AppContainer className="main-wrapper">{children}</AppContainer>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
