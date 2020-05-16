import React from "react";
import PropTypes from "prop-types";
import { Container } from "@material-ui/core";
import { useStaticQuery, graphql } from "gatsby";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import AppBar from "./AppBar";
import Footer from "./Footer";
import "../styles/layout.css";
import "../styles/global.css";

const Theme = createMuiTheme({
  typography: {
    body1: {
      color: "#eee",
    },
  },
  palette: {
    primary: {
      main: "#2D2F36",
    },
    secondary: {
      main: "#0077B5",
    },
  },
});

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "space-between",
      }}
    >
      <ThemeProvider theme={Theme}>
        <AppBar siteTitle={data.site.siteMetadata.title} />
        <Container maxWidth="lg">
          <main style={{ flex: 1, marginTop: 30 }}>{children}</main>
          <Footer />
        </Container>
      </ThemeProvider>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
