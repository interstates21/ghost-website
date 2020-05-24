import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/app";
import Timeline from "../components/Timeline";
import Image from "../components/ImageCat";
import SEO from "../components/seo";
import {
  Typography,
  Container,
  Grid,
  List,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import BlogPost from "../components/BlogPost";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
  },
  search: {
    color: "#ddd",
    width: "100%",
    "& .MuiOutlinedInput-root": {
      // "&.Mui-focused ": {
      //   color: theme.palette.secondary.main,
      // },
      width: "100%",
      color: "#ddd",
      "& fieldset": {
        borderColor: "#ddd",
      },
      "&:hover fieldset": {
        borderColor: "#ddd",
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.secondary.main,
      },
    },
  },
}));

const MySearchField = () => {
  const classes = useStyles();
  return (
    <TextField
      id="outlined-search"
      label="Find"
      type="search"
      className={classes.search}
      variant="outlined"
      size="small"
      color="secondary"
    />
  );
};
const IndexPage = ({ data }) => {
  console.log("dataIndex = ", data);
  const classes = useStyles();
  return (
    <Layout>
      <SEO title="Home" />
      <Grid container spacing={10} style={{ justifyContent: "center" }}>
        <Grid item xs={12} lg={5}>
          <Image />
        </Grid>
        <Grid item xs={12} lg={8}>
          <Typography style={{ marginBottom: 15 }}>In development</Typography>
          <Typography>Welcome to my blog page! Here is a cat pic</Typography>
          {/* <MySearchField /> */}
        </Grid>
        <Grid item xs={12} lg={8}>
          <List className={classes.root}>
            {data.allMarkdownRemark.edges.map((post, index) => (
              <BlogPost post={post} key={index} />
            ))}
          </List>
        </Grid>
      </Grid>
    </Layout>
  );
};

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
            icon
          }
        }
      }
    }
  }
`;

export default IndexPage;
