import React from "react";
import { Link } from "gatsby";

import Layout from "../components/app";
import Timeline from "../components/Timeline";
import Image from "../components/ImageCat";
import SEO from "../components/seo";
import { Typography } from "@material-ui/core";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Image />
  </Layout>
);

export default IndexPage;
