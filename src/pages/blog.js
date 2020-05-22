import React from "react";
import { Link } from "gatsby";

import Layout from "../components/app";
import Timeline from "../components/Timeline";
import Image from "../components/ImageCat";
import SEO from "../components/seo";
import { Typography, Container, Grid } from "@material-ui/core";

const BlogPost = () => {};

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Grid container spacing={5} style={{ justifyContent: "center" }}>
      <Grid item xs={12} lg={8}>
        <Typography style={{ marginBottom: 15 }}>In development</Typography>
        <Typography>Welcome to my blog page! Here is a cat pic</Typography>
      </Grid>
      <Grid item xs={12} lg={8}>
        <Image />
      </Grid>
    </Grid>
  </Layout>
);

export default IndexPage;
