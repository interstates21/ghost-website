import React from "react";
import { Typography, Link, Grid, Button, ButtonGroup } from "@material-ui/core";
import {
  FaGithubAlt,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaNodeJs,
  FaReact,
  FaHeart,
  FaTelegramPlane,
  FaUser,
  FaDiscord,
} from "react-icons/fa";
import { GrGatsbyjs, GrGraphQl } from "react-icons/gr";
import ContactCollapse from "./ContactCollapse";

const PersonalDataLine = ({ title }) => {
  return (
    <Grid item xs={12} lg={12}>
      <Typography
        style={{
          color: "#798398",
          display: "flex",
          textAlign: "left",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {title}
      </Typography>
    </Grid>
  );
};
export default function Footer() {
  return (
    <Grid
      container
      style={{
        minHeight: 150,
        paddingTop: "3%",
        width: "100%",
        marginTop: "1%",
        paddingBottom: "2%",
      }}
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={6}>
        <Grid container flexDirection="row" style={{ marginTop: "2%" }}>
          <PersonalDataLine title="interstates21@gmail.com" />
          <PersonalDataLine title="+38(063)581-61-21" />
          <PersonalDataLine title="Alexey Kupin" />
          <PersonalDataLine title="Kyiv, Ukraine" />
        </Grid>
      </Grid>
      <Grid
        item
        xs={6}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <ContactCollapse />
        <div
          style={{
            display: "flex",
            marginTop: 10,
            position: "relative",
            top: 10,
          }}
        >
          <Typography
            variant="body2"
            style={{ color: "#798398", marginRight: 6 }}
          >
            powered by
          </Typography>
          <FaReact size={33} style={{ color: "#798398", marginRight: 8 }} />
          <GrGatsbyjs size={33} style={{ color: "#798398", marginRight: 8 }} />
          <GrGraphQl size={33} style={{ color: "#798398", marginRight: 8 }} />
          <FaNodeJs size={33} style={{ color: "#798398", marginRight: 8 }} />
          {/* <FaHeart size={33} style={{ color: "#798398", marginRight: 8 }} /> */}
        </div>
      </Grid>
    </Grid>
  );
}
