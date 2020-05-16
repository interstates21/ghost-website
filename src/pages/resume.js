import React from "react";
import { Link } from "gatsby";

import Layout from "../components/app";
import Timeline from "../components/Timeline";
import CV from "../components/CV";
import SEO from "../components/seo";
import Skills from "../components/Skills";
import { Typography } from "@material-ui/core";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <CV />
    <Skills />
    <Typography
      variant="h2"
      align="center"
      style={{ color: "white", fontSize: "2rem" }}
    >
      {/* time... */}
    </Typography>
    <Timeline />
  </Layout>
);

export default IndexPage;
