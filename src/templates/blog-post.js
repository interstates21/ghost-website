import React from "react";
import { Link } from "gatsby";
import Layout from "../components/app";
import "./blog-post.css";
import {
  Typography,
  Container,
  Grid,
  List,
  TextField,
} from "@material-ui/core";

const Template = ({ data }) => {
  console.log("data = ", data);
  const post = data.markdownRemark;

  return (
    <Layout>
      <Container maxWidth="md">
        <div className="blog-root">
          {/* <div
            style={{
              borderBottom: "2px solid #0077B5",
              width: "100%",
              paddingBottom: 5,
              marginBottom: 15,
            }}
          >
            <Typography
              style={{
                color: "#0077B5",
                fontSize: "1rem",
                width: "100%",
                textAlign: "right",
                padding: 5,
                borderRadius: 1,
              }}
              variant="caption"
            >
              Posted by {post.frontmatter.author} on {post.frontmatter.date}
            </Typography>
          </div> */}
          <Typography variant="h4" style={{ fontSize: "2.1rem" }}>
            {post.frontmatter.title}
          </Typography>

          <div style={{ margin: 35 }} />
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </Container>
    </Layout>
  );
};

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`;

export default Template;
