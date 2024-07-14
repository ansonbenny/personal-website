export { Layout };

import React from "react";
import PropTypes from "prop-types";
import { childrenPropType } from "./PropTypeValues";
import { PageContextProvider } from "./usePageContext";
import { Footer, Navbar } from "../src/components";
import "./css/globals.css";

Layout.propTypes = {
  pageContext: PropTypes.any,
  children: childrenPropType,
};

function Layout({ pageContext, children }) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <Navbar />
        {children}
        <Footer />
      </PageContextProvider>
    </React.StrictMode>
  );
}
