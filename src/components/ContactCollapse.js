import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";

import { MdMenu } from "react-icons/md";

import { Typography, Link, Grid, Button, ButtonGroup } from "@material-ui/core";
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

const ContactLink = ({ title, Icon }) => {
  return (
    <StyledMenuItem>
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
        variant="contained"
        color="secondary"
      >
        <FaGithubAlt
          size={20}
          style={{ position: "relative", bottom: 1.5, marginRight: 5 }}
        />
        GitHub
      </Button>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        style={{marginLeft: 15}}
        variant="contained"
        color="secondary"
        onClick={handleClick}
      >
        <MdMenu
          size={20}
          style={{ position: "relative", bottom: 1.5, marginRight: 5 }}
        />
        Social
      </Button>
      <StyledMenu
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        id="customized-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <ContactLink title="LinkedIn" Icon={FaLinkedin} />
        <ContactLink title="Facebook" Icon={FaFacebook} />
        <ContactLink title="Instagram" Icon={FaInstagram} />
        <ContactLink title="Telegram" Icon={FaTelegram} />
        <ContactLink title="Discord" Icon={FaDiscord} />
        <ContactLink title="Upwork" Icon={FaUser} />
      </StyledMenu>
    </div>
  );
}
