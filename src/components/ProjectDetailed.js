import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { FaBars } from "react-icons/fa";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LinkIcon from "@material-ui/icons/Link";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Planet } from "react-planet";

const useStyles = makeStyles(theme => ({
  root: {
    width: "90vw",
    height: "90vh",
    display: "flex",
    flexDirection: "column",
    padding: "4%",
    overflowY: "visible",
    alignItems: "center",
  },
  media: {
    minWidth: "30%",
    height: 340,
    // paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const TechItem = ({ e }) => {
  return (
    <div
      style={{
        height: 80,
        width: 80,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ccc",
        color: "white",
      }}
    >
      {e.icon ? (
        <e.icon size={"70%"} />
      ) : (
        <Typography style={{ fontSize: "0.7rem", color: "white" }}>
          {e.name}
        </Typography>
      )}
    </div>
  );
};

const Technologies = ({ stack }) => {
  return (
    <Planet
      bounce
      centerContent={
        <Fab
          color="secondary"
          aria-label="edit"
          style={{
            height: 90,
            width: 90,
            borderRadius: "50%",
            backgroundColor: "#222",
            cursor: "pointer",
          }}
        >
          <Typography
            style={{
              fontSize: "0.7rem",
              marginRight: 3,
              position: "relative",
              top: 1,
            }}
          >
            Stack
          </Typography>
          <FaBars size="0.7rem" />
        </Fab>
      }
      open
      autoClose
    >
      {stack.map((e, index) => (
        <TechItem e={e} key={index} />
      ))}
    </Planet>
  );
};

export default function RecipeReviewCard({ item }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <Grid container spacing={5} justify="center">
        <Grid item xs={12} lg={6}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {item.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {item.about}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <LinkIcon />
            </IconButton>
            <IconButton aria-label="git">
              <GitHubIcon />
            </IconButton>
          </CardActions>
        </Grid>
        <Grid item xs={12} lg={6}>
          <CardMedia
            className={classes.media}
            image={item.image}
            title="Title Image"
          />
        </Grid>
        <Grid item xs={10} lg={10}>
          <div
            style={{
              height: 80,
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flex: 4,
                backgroundColor: "#eee",
                borderRadius: 4,
                paddingRight: 20,
                paddingLeft: 20,
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h2"
                style={{ fontSize: "2.3rem", color: "#444" }}
              >
                {item.role} | {item.status}
              </Typography>
            </div>
            <div
              style={{
                flex: 1,
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <div style={{ position: "relative", left: "-100px", top: -5 }}>
                <Technologies stack={item.stack} />
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid container justify="center" style={{ marginTop: "4%" }} spacing={5}>
        {/* <Grid item xs={10}> */}
        {/* </Grid> */}
        {item.pics.map((pic, index) => (
          <Grid item xs={pic.small ? 7 : 10}>
            <img src={pic.url} title={pic.alt} />
          </Grid>
        ))}
      </Grid>
    </Card>
  );
}
