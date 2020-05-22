import React from "react";
import { Link } from "gatsby";

import Layout from "../components/app";
import Timeline from "../components/Timeline";
import Demo from "../components3D/Demo";
import SEO from "../components/seo";
import { Typography } from "@material-ui/core";
import PlanetMenu from "../components/PlanetMenu";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Demo />
  </Layout>
);

export default IndexPage;
