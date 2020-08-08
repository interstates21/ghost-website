import React from "react";
import { Link } from "gatsby";

import Layout from "../components/app";
import Image from "../components/ImageHacker";
import Timeline from "../components/Timeline";
import SEO from "../components/seo";
import Highlights from "../components/Highlights";
import { FaReact } from "react-icons/fa";
import { Typography, Grid, Box } from "@material-ui/core";

// Hey, I'm Alex. I am a frontend development enthusiast and programmer

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Grid
      container
      spacing={8}
      style={{ justifyContent: "center", marginTop: 25 }}
    >
      <Grid item xs={12} lg={8}>
        <Typography>
          Nice to see you here! I'm Alex - a full stack developer. My primary
          focus is outstanding UX, clean, reliable, and performant architecture
          and full responsibility for your project. I have excellent experience
          in React.js, React Native, Material UI, MERN stack, building, and
          deploying from scratch as well as dozens of other skills (see the
          'Resume' section). If you'd like to cooperate, please, contact me with
          Telegram, Email, Discord, or Upwork (find below).
        </Typography>
      </Grid>
      <Grid item xs={10} lg={8}>
        <Highlights />
      </Grid>
      <Grid item xs={10} lg={8}>
        <Image type="cat" />
      </Grid>
    </Grid>
  </Layout>
);

export default IndexPage;
