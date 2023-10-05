import * as React from "react";
// import Box from "@mui/material/Box";
import "./styles.css";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import backgroundPicture from "./purpleBackground.jpeg";

export default function App() {
  return (
    <Grid
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Grid container justifyContent="center" direction="row">
        <Grid
          item
          xs={12}
          sm={6}
          style={{
            backgroundImage: `url(${backgroundPicture})`,
            backgroundSize: "cover",
            height: "70vh",
            color: "#f5f5f5"
          }}
          display="flex"
          justifyContent="center"
          alignItems="center"
          direction="column"
        >
          <>
            <p className="welcome">Welcome to the website</p>
            <p className="welcomeContext">
              This is a demo page for login functionality. You can enter your
              user name and password. Since it is a demo version, it will not
              log you into anything, but will simply trigger an alert.
            </p>
          </>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Grid container>
            <Paper
              style={{
                height: "70vh",
                width: "100%",
                margin: 0
              }}
            >
              <h1>Hi there</h1>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
