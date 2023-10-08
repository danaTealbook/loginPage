import * as React from "react";
import "./styles.css";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import backgroundPicture from "./purpleBackground.jpeg";
import LoginForm from "./LoginForm";

function WelcomeText() {
  return (
    <>
      <div className="welcome">Welcome</div>
      <p className="welcomeContext">
        This is a demo page for login functionality. You can enter your user
        name and password. Since it is a demo version, it will not log you into
        anything, but will simply trigger an alert.
      </p>
    </>
  );
}

export default function App() {
  return (
    <Grid
      container
      justifyContent="center"
      display="flex"
      alignItems="center"
      direction="row"
      minHeight="100vh"
    >
      <Grid
        item
        xs={12}
        md={6}
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
        container
      >
        <WelcomeText />
      </Grid>
      <Grid item container xs={12} md={4}>
        <Paper
          elevation={0}
          style={{
            height: "70vh",
            width: "100%",
            justifyContent: "center",
            display: "flex",
            alignItems: "center"
          }}
        >
          <LoginForm />
        </Paper>
      </Grid>
    </Grid>
  );
}
