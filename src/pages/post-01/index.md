---
path: "/post-01"
date: "2020-05-23"
title: "Advanced Asynchronous Progamming: loops"
author: "Alex Kupin"
icon: "js.svg"
---

Test: 
You need one additional thing beyond a slug to create pages: a page template component. Like everything in Gatsby, programmatic pages are powered by React components. When creating a page, you need to specify which component to use.

```
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
```
