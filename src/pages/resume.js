import React from "react";
import { Link } from "gatsby";

import Layout from "../components/app";
import Image from "../components/image";
import Timeline from "../components/Timeline";
import CV from "../components/CV";
import SEO from "../components/seo";
import { Typography } from "@material-ui/core";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <CV />
    <Typography variant="h2" align="center" style={{color: 'white', fontSize: '3rem'}}>
      Timeline...
    </Typography>
    <Timeline />
  </Layout>
);

export default IndexPage;
