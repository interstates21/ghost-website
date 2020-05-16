import React from "react";
import { Link } from "gatsby";

import Layout from "../components/app";
import Image from "../components/ImageHacker";
import Timeline from "../components/Timeline";
import SEO from "../components/seo";
import Highlights from "../components/Highlights";
import { FaReact } from "react-icons/fa";
import { Typography, Grid, Box } from "@material-ui/core";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Grid container spacing={10} style={{ justifyContent: "center" }}>
      <Grid item xs={12} lg={8}>
        <Typography>
          Hey, I'm Alex. I am a frontend development enthusiast and programmer.
          During the last two years, I have been highly engaged in the
          development of Real-World Applications in React / React Native. I am
          eager to outstanding UX and code quality so I am usually the one who
          is responsible for building an application's architecture in a team.
          My toolkit includes ES6, Typescript, React Hooks, Redux-Saga, Web
          Deployment, Native Deployment, Styled Components, React Patterns,
          Socket.io, basic Node.js, basic Three.js, basic WebPack configuration.
          Meanwhile, for the last 3 years, I study Algorithms and Computer
          Graphics in 'school42', so I am closely familiar with C/C++, low-level
          programming and basic VR/Game Development in Unity3D.
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
