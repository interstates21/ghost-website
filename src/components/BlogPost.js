import React, { useLayoutEffect, useState } from "react";
import { Link } from "gatsby";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Avatar from "@material-ui/core/Avatar";

import WorkIcon from "@material-ui/icons/Work";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";

const useStyles = makeStyles(theme => ({
  post: {
    marginBottom: 10,
    borderRadius: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
      background: "rgba(255,255,255, 0.07)",
    },
  },
  secondary: {
    color: "rgb(122,131,152)",
  },
  primary: {
    color: "#eee",
    fontSize: "1.5rem",
  },
}));

export default function BlogPost({ post }) {
  const [iconURI, setIconURI] = useState(null);
  const classes = useStyles();

  console.log("post", post);
  const { author, title, date, path, icon } = post.node.frontmatter;

  useLayoutEffect(() => {
    if (!icon) return;
    import(`../images/blog-icons/${icon}`).then(e => {
      setIconURI(e.default);
    });
  }, []);
  return (
    <Link to={path}>
      <ListItem button className={classes.post}>
        <ListItemIcon
          style={{
            height: 60,
            marginRight: 15,
          }}
        >
          <img src={iconURI} style={{ margin: "auto", height: "100%" }} />
        </ListItemIcon>
        <ListItemText
          primary={title}
          secondary={`from ${date}`}
          secondaryTypographyProps={{
            className: classes.secondary,
            variant: "caption",
          }}
          primaryTypographyProps={{
            className: classes.primary,
            variant: "h5",
          }}
        />
      </ListItem>
    </Link>
  );
}
