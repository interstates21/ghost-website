import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

// import { Collapse } from 'react-collapse';
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import MyDocument from "./MyDocument";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    background: "#3d3e49",
  },
  viewer: {
    width: "100%",
    height: 1100,
  },
  heading: {
    marginLeft: 20,
    marginTop: 5,
    // fontSize: theme.typography.pxToRem(15),
    // fontWeight: theme.typography.fontWeightRegular,
  },
}));

const CV = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  return (
    <Grid container style={{ marginBottom: "2%" }}>
      <Grid item xs={12}>
        <ExpansionPanel className={classes.root}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon style={{ color: "#eee" }} />}
            aria-controls="panel1a-content"
            style={{
              display: "flex",
              justifyContent: "center",
            }}
            id="panel1a-header"
          >
            <Button variant="contained" color="secondary">
              <PDFDownloadLink
                fileName="Oleksii_Kupin_CV_React"
                document={<MyDocument />}
                style={{ color: "#fff" }}
              >
                Download PDF
              </PDFDownloadLink>
            </Button>
            <Typography className={classes.heading}>View</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <PDFViewer className={classes.viewer}>
              <MyDocument />
            </PDFViewer>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Grid>
      <Grid item xs={4}>
        {/* <Button>
          <PDFDownloadLink
            fileName="Oleksii_Kupin_CV_React"
            document={<MyDocument />}
            style={{ color: "#7A8398" }}
          >
            Download PDF
          </PDFDownloadLink>
        </Button> */}
      </Grid>
    </Grid>
  );
};

export default CV;
