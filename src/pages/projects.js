import React from "react";
import { Link } from "gatsby";

import Layout from "../components/app";
import Image from "../components/image";
import Timeline from "../components/Timeline";
import SEO from "../components/seo";
import Project from "../components/Project";
import { Typography, Grid } from "@material-ui/core";

const projectsList = [
  {
    name: "Understanding9",
  },
  {
    name: "Understanding9",
  },
  {
    name: "Understanding9",
  },
  {
    name: "Understanding9",
  },
  {
    name: "Understanding9",
  },
  {
    name: "Understanding9",
  },
  {
    name: "Understanding9",
  },
];
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Grid container spacing={3}>
      {projectsList.map((e, index) => (
        <Grid item key={index} xs={12} md={6} lg={3}>
          <Project />
        </Grid>
      ))}
    </Grid>
  </Layout>
);

export default IndexPage;
