import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Location } from "@reach/router";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link } from "gatsby";
import {
  GiGluttony,
  GiGooExplosion,
  GiAbstract089,
  GiBookCover,
} from "react-icons/gi";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonPinIcon from "@material-ui/icons/PersonPin";

const isActive = ({ isCurrent }) => {
  console.log("isCurrent", isCurrent);
  return isCurrent ? { className: "active" } : {};
};

function LinkTab({ path = "#", ...props }) {
  return (
    <Tab
      component={Link}
      to={path}
      isActive={isActive}
      onClick={event => {
        // event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginRight: 10,
    // maxWidth: 500,
  },
  tab: {
    backgroundColor: "#34353e",
    color: "white",
  },
}));

export default function MyTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(null);

  const handleChange = (event, newValue, location) => {
    switch (location.pathname) {
      case value:
        break;

      default:
        break;
    }
    // setValue(newValue);
  };

  return (
    <Location>
      {({ location }) => {
        return (
          <Tabs
            value={value}
            onChange={(event, newValue) =>
              handleChange(event, newValue, location)
            }
            variant="fullWidth"
            className={classes.root}
            indicatorColor="secondary"
            textColor="secondary"
            aria-label="icon tabs example"
          >
            <LinkTab
              className={classes.tab}
              icon={<GiGluttony />}
              path={"/resume"}
              label="Resume"
              aria-label="phone"
            />
            <LinkTab
              className={classes.tab}
              icon={<GiAbstract089 />}
              path={"/projects"}
              label="Projects"
              aria-label="favorite"
            />
            <LinkTab
              className={classes.tab}
              icon={<GiGooExplosion />}
              label="Lab"
              path={"/lab"}
              aria-label="person"
            />
            <LinkTab
              className={classes.tab}
              icon={<GiBookCover />}
              path={"/blog"}
              label="Blog"
              aria-label="person"
            />
          </Tabs>
        );
      }}
    </Location>
  );
}
