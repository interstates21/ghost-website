import React from "react";
import { Link } from "gatsby";

import Layout from "../components/app";
import Timeline from "../components/Timeline";
import SEO from "../components/seo";
import Project from "../components/Project";
import {
  FaTelegramPlane,
  FaNodeJs,
  FaDigitalOcean,
  FaPhp,
  FaMobile,
  FaReact,
} from "react-icons/fa";
import MyModal from "../components/MyModal";
import { Typography, Grid } from "@material-ui/core";

const projectsList = [
  {
    name: "Understanding9",
    about:
      "We encorage you guys who are getting through a hard time or look for understanding and motivation to meet your Psychologist here. Probably, most of the professional psychologists in our society are either expensive or shit. So we would love to invite Young Psychology Graduates or Students to make a profile, get a profound experience, earn something and contribute to the world!",
    git: "https://github.com/interstates21/understanging9-bot",
    image: require("../images/u9/title.png"),
    role: "Founder",
    status: "Developing",
    pics: [
      { url: require("../images/u9/1.png"), alt: "" },
      { url: require("../images/u9/2.png"), alt: "" },
    ],
    stack: [
      {
        name: "Telegraph",
        icon: FaTelegramPlane,
      },
      {
        name: "Node",
        icon: FaNodeJs,
      },
      {
        name: "Digital Ocean",
        icon: FaDigitalOcean,
      },
    ],
  },
  {
    name: "Caro",
    about:
      "We'll schedule a professional pre-purchase inspection. One of our expert inspectors will come to your driveway and perform our Beepi inspection; no pre-owned car gets sold until it is Beepi-certified.",
    git: "https://github.com/interstates21/understanging9-bot",
    image: require("../images/caro/title.png"),
    role: "Front-End Team Lead",
    status: "Developing",
    pics: [
      { url: require("../images/caro/1.png"), alt: "", small: true },
      { url: require("../images/caro/2.png"), alt: "", small: true },
      { url: require("../images/caro/3.png"), alt: "", small: true },
      { url: require("../images/caro/4.png"), alt: "" },
      { url: require("../images/caro/5.png"), alt: "" },
    ],
    stack: [
      {
        name: "React Native",
        icon: FaMobile,
      },
      {
        name: "React",
        icon: FaReact,
      },
      {
        name: "Redux/Saga",
        icon: null,
      },
      {
        name: "Php",
        icon: FaPhp,
      },
      {
        name: "MUI",
        icon: null,
      },
      {
        name: "TypeScript",
        icon: null,
      },
    ],
  },
  {
    name: "Appitr IDE",
    about:
      "Appitr is a online tool to help you build native iOS and Android projects using JavaScript and React Native. Create a native mobile app with online IDE within hours. Beautiful, simple and easiest way.",
    git: "https://github.com/interstates21/understanging9-bot",
    image: require("../images/appitr/title.png"),
    role: "Intern",
    status: "Frozen",
    pics: [
      { url: require("../images/appitr/1.png"), alt: "", small: false },
      { url: require("../images/appitr/2.png"), alt: "", small: false },
    ],
    stack: [
      {
        name: "React",
        icon: FaReact,
      },
      {
        name: "React Native",
        icon: FaMobile,
      },
      {
        name: "Node",
        icon: FaNodeJs,
      },
    ],
  },
];
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Grid container spacing={10}>
      {projectsList.map((e, index) => (
        <Grid
          item
          key={index}
          xs={12}
          md={6}
          lg={3}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Project item={e} />
        </Grid>
      ))}
    </Grid>
  </Layout>
);

export default IndexPage;
