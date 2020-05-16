import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import { Link } from "gatsby";
import {
  GiGluttony,
  GiGooExplosion,
  GiNinjaHead,
  GiAbstract089,
  GiBookCover,
} from "react-icons/gi";

import { MdMenu } from "react-icons/md";

import { Typography, Grid, Button, ButtonGroup } from "@material-ui/core";
import {
  FaGithubAlt,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaTelegramPlane,
  FaUser,
  FaDiscord,
  FaTelegram,
} from "react-icons/fa";

const StyledMenu = withStyles({
  paper: {
    // border: "1px solid #d3d4d5",
  },
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    padding: "5px 25px 5px 25px",
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const ContactLink = ({ title, Icon, path }) => {
  return (
    <StyledMenuItem>
      <Link to={path}>
        <ListItemIcon>
          <Icon
            size={20}
            style={{
              // color: "",
              position: "relative",
              top: 3,
              marginRight: 8,
            }}
          />
          {title}
        </ListItemIcon>
      </Link>
    </StyledMenuItem>
  );
};
export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        style={{
          color: "#efefef",
          borderColor: "#efefef",
          marginRight: 30,
          width: "100%",
        }}
        variant="outlined"
        onClick={handleClick}
      >
        <MdMenu
          size={20}
          style={{ position: "relative", bottom: 1.5, marginRight: 5 }}
        />
        Menu
      </Button>
      <StyledMenu
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        id="customized-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <ContactLink title="About" Icon={GiNinjaHead} path={"/"} />
        <ContactLink title="Resume" Icon={GiGluttony} path={"/resume"} />
        <ContactLink title="Projects" Icon={GiAbstract089} path={"/projects"} />
        <ContactLink Icon={GiGooExplosion} title="Lab" path={"/lab"} />
        <ContactLink Icon={GiBookCover} path={"/blog"} title="Blog" />
      </StyledMenu>
    </div>
  );
}
