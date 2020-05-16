import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";

import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaMobile,
  FaNetworkWired,
  FaBoxes,
  FaList,
  FaListAlt,
  FaLanguage,
  FaCode,
} from "react-icons/fa";

import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import Star from "@material-ui/icons/Star";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: "#0077B5",
    marginBottom: "4%",
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const arr5 = [true, true, true, true, true];
const Section = ({ open, classes, toggle, skill }) => {
  return (
    <>
      <ListItem button onClick={toggle}>
        <ListItemIcon>
          <skill.icon size={"30"} />
        </ListItemIcon>
        <ListItemText primary={skill.title} />
        {open ? (
          <ExpandLess style={{ color: "#ddd" }} />
        ) : (
          <ExpandMore style={{ color: "#ddd" }} />
        )}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {skill.children.map((e, index) => (
          <List key={index} component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon style={{ marginRight: 10 }}>
                {arr5.map((s, index) =>
                  index < e.amount ? <Star /> : <StarBorder />
                )}
              </ListItemIcon>
              <ListItemText primary={e.title} />
            </ListItem>
          </List>
        ))}
      </Collapse>
    </>
  );
};

const skills = [
  {
    title: "JS / Web Basics",
    icon: FaJs,
    children: [
      {
        title: "HTML / CSS",
        amount: 5,
      },
      {
        title: "JS Core",
        amount: 5,
      },
      {
        title: "ES6",
        amount: 5,
      },
      {
        title: "Async",
        amount: 4,
      },
      {
        title: "TypeScript",
        amount: 4,
      },
      {
        title: "Styled Components",
        amount: 4,
      },
      {
        title: "Visual Design",
        amount: 5,
      },
    ],
  },
  {
    title: "React",
    icon: FaReact,
    children: [
      {
        title: "Create React App",
        amount: 5,
      },
      {
        title: "Hooks",
        amount: 5,
      },
      {
        title: "React Router",
        amount: 5,
      },
      {
        title: "Web Deployment / Basic DevOps",
        amount: 4,
      },
      {
        title: "Material UI",
        amount: 4,
      },
      {
        title: "Gatsby",
        amount: 2,
      },
      {
        title: "Next.js",
        amount: 1,
      },
    ],
  },
  {
    title: "React Native",
    icon: FaMobile,
    children: [
      {
        title: "Core",
        amount: 5,
      },
      {
        title: "Builds / Deployment",
        amount: 5,
      },
      {
        title: "Native Debugging",
        amount: 3,
      },
      {
        title: "React Navigation",
        amount: 4,
      },
    ],
  },
  {
    title: "Flux",
    icon: FaBoxes,
    children: [
      {
        title: "Redux Core",
        amount: 5,
      },
      {
        title: "Redux Saga/Thunk",
        amount: 4,
      },
      {
        title: "Redux Persist",
        amount: 3,
      },
      {
        title: "Context",
        amount: 3,
      },
    ],
  },
  {
    title: "Api",
    icon: FaNetworkWired,
    children: [
      {
        title: "Rest",
        amount: 5,
      },
      {
        title: "GraphQL",
        amount: 2,
      },
      {
        title: "Network Debugging",
        amount: 5,
      },
      {
        title: "Axios",
        amount: 4,
      },
    ],
  },
  {
    title: "Server",
    icon: FaNodeJs,
    children: [
      {
        title: "Node",
        amount: 3,
      },
      {
        title: "Express",
        amount: 3,
      },
      {
        title: "MongoDB",
        amount: 2,
      },
      {
        title: "Socket.io",
        amount: 4,
      },
    ],
  },
  {
    title: "Tools",
    icon: FaCode,
    children: [
      {
        title: "VSCode",
        amount: 5,
      },
      {
        title: "Git",
        amount: 4,
      },
      {
        title: "Postman",
        amount: 4,
      },
      {
        title: "SSH",
        amount: 4,
      },
      {
        title: "Webpack",
        amount: 2,
      },
      {
        title: "Bash",
        amount: 3,
      },
      {
        title: "Docker",
        amount: 1,
      },
      {
        title: "Figma",
        amount: 3,
      },
      {
        title: "Trello",
        amount: 5,
      },
    ],
  },
  {
    title: "Additional",
    icon: FaListAlt,
    children: [
      {
        title: "OOP",
        amount: 4,
      },
      {
        title: "Networks",
        amount: 3,
      },
      {
        title: "Algorithms",
        amount: 3,
      },
      {
        title: "C",
        amount: 5,
      },
      {
        title: "C++",
        amount: 3,
      },
      {
        title: "Unity",
        amount: 3,
      },
      {
        title: "Computer Graphics",
        amount: 4,
      },
      {
        title: "THREE.js / aframe",
        amount: 2,
      },
    ],
  },
  {
    title: "Languages",
    icon: FaLanguage,
    children: [
      {
        title: "Russian / Ukrainian",
        amount: 5,
      },
      {
        title: "English [C1]",
        amount: 4,
      },
    ],
  },
];

export default function NestedList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(skills.map(() => false));

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader
          component="div"
          id="nested-list-subheader"
          style={{ color: "#063753" }}
        >
          Skills
        </ListSubheader>
      }
      className={classes.root}
    >
      {skills.map((skill, index) => (
        <Section
          key={index}
          open={open[index]}
          toggle={() => setOpen(p => p.map((e, i) => (i === index ? !e : e)))}
          classes={classes}
          skill={skill}
        />
      ))}
    </List>
  );
}
