import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import {
  GiTechnoHeart,
  GiTeacher,
  GiDiscussion,
  GiFluffyTrefoil,
  GiRunningShoe,
  GiThreeFriends,
  GiSpaceShuttle,
  GiTalk,
  GiChecklist,
  GiNinjaHead,
} from "react-icons/gi";

const highlights = [
  {
    title: "3+ years in programming",
    icon: GiTechnoHeart,
    color: "#C33888",
  },
  {
    title: "Independent, initiative, perfectionist",
    icon: GiNinjaHead,
    color: "#C33888",
  },
  {
    title: "Have a good English",
    icon: GiTalk,
    color: "#C33888",
  },
  {
    title: "Aspire to be a curious explorer like astronauts and scientists",
    icon: GiSpaceShuttle,
    color: "#C33888",
  },
  {
    title: "Like minimalistic and beautiful things",
    icon: GiFluffyTrefoil,
    color: "#C33888",
  },
  {
    title:
      "Like community spirit, social experiments and great teams of friends",
    icon: GiThreeFriends,
    color: "#C33888",
  },
  {
    title: "Runner",
    icon: GiRunningShoe,
    color: "#C33888",
  },
  {
    title:
      "Like stories and smart talks about Physics, Society, Unique Personal Experience",
    icon: GiDiscussion,
    color: "#C33888",
  },
  {
    title: "Like making lists",
    icon: GiChecklist,
    color: "#C33888",
  },
  {
    title: "Would like to be a teacher",
    icon: GiTeacher,
    color: "#C33888",
  },
];
export default function AlignItemsList() {
  const cont = highlights.map((line, index) => (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      <line.icon size={20} style={{ marginRight: 10, color: line.color }} />
      <Typography>{line.title}</Typography>
    </div>
  ));

  return (
    <div>
      {/* <Typography
        variant="subtitle1"
        align="center"
        style={{ marginBottom: 5, color: "#798297", fontSize: "2rem" }}
      >
        Highlights:
      </Typography> */}
      {cont}
    </div>
  );
}
