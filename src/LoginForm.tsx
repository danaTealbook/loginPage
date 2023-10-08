import Grid from "@mui/material/Grid";
import InputAdornment from "@mui/material/InputAdornment";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import FormControl from "@mui/material/FormControl";
import MyInput from "./MyInput";
import MyButton from "./MyButton";
import { useState } from "react";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  console.log("username: ", username);
  console.log("password: ", password);
  return (
    <Grid
      container
      display="flex"
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <p className="user-login-header">USER LOGIN</p>
      <FormControl variant="standard" className="input-container">
        <MyInput
          id="username-input"
          startAdornment={
            <InputAdornment position="start">
              <PersonIcon className="icon" />
            </InputAdornment>
          }
          value={username}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUsername(e.target.value)
          }
        />
      </FormControl>
      <FormControl variant="standard" className="input-container">
        <MyInput
          id="password-input"
          startAdornment={
            <InputAdornment position="start">
              <LockIcon className="icon" />
            </InputAdornment>
          }
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />
      </FormControl>
      <MyButton
        variant="outlined"
        onClick={() => {
          const alertMessage =
            "Login for \n" +
            "Username: " +
            username +
            "\nPassword: " +
            password;
          alert(alertMessage);
        }}
      >
        Log In
      </MyButton>
    </Grid>
  );
}
