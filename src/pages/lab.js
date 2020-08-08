import React from "react";
import { Link } from "gatsby";

import Layout from "../components/app";
import Timeline from "../components/Timeline";
import Demo from "../components3D/Demo";
import SEO from "../components/seo";
import { Typography } from "@material-ui/core";
import PlanetMenu from "../components/PlanetMenu";
import { Helmet } from "react-helmet";

const IndexPage = () => (
  <Layout>
    <Helmet>
      <script src="https://aframe.io/releases/1.0.4/aframe.min.js"></script>
    </Helmet>
    <SEO title="Home" />
    <Demo />
    {/* <a href="http://localhost:8080">Enter the dark forest</a> */}
  </Layout>
);

export default IndexPage;
