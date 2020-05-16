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
    <Grid container spacing={10} style={{ justifyContent: "center" }}>
      <Grid item xs={12} lg={8}>
        <Typography>
          Nice to meet you! I'm Alex - a Full Stack Developer, who likes
          building beautiful websites with <b>React.js</b>, cross-platform
          mobile applications with <b>React Native</b>, <b>THREE.js</b> computer
          graphics, and <b>Node.js</b> backends. I am eager to outstanding UI/UX
          and love when all the details are perfectly matched. Also, I love it
          when my work has either storytelling or social focus. If you'd like to
          cooperate or discuss the Universe, please, contact me with Telegram,
          Email, Discord or Upwork.
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
