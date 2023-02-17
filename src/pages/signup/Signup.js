import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://sirzaxx.info/">
        Sir Zaxx
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [cpasswordErr, setCPasswordErr] = useState("");
  const [firstNameErr, setFirstNameErr] = useState("");
  const [lastNameErr, setLastNameErr] = useState("");
  const [checkBoxErr, setCheckBoxErr] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const firstName = data.get("firstName");
    const lastName = data.get("lastName");
    const email = data.get("email");
    const password = data.get("password");
    const cpassword = data.get("cpassword");
    const checkboxValue = data.get("checkbox");
    var errorF = false;
    var errorL = false;
    var errorE = false;
    var errorP = false;
    var errorCP = false;
    var errorCB = false;

    //firstname validator

    if (firstName.length === 0) {
      errorF = true;
      setFirstNameErr("Field cannot be empty");
    } else if (firstName.length < 3) {
      errorF = true;
      setFirstNameErr("Entered name must be atleast 3 characters!");
    } else {
      errorF = false;
      setFirstNameErr("");
    }

    //lastname validator

    if (lastName.length === 0) {
      errorL = true;
      setLastNameErr("Field cannot be empty");
    } else if (lastName.length < 3) {
      errorL = true;
      setLastNameErr("Entered name must be atleast 3 characters!");
    } else {
      errorL = false;
      setLastNameErr("");
    }

    //email validator

    if (email.length === 0) {
      errorE = true;
      setEmailErr("Field cannot be empty");
    } else if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
      )
    ) {
      errorE = true;
      setEmailErr("Entered email is invalid!");
    } else {
      errorE = false;
      setEmailErr("");
    }
    //password validator

    if (password.length === 0) {
      errorP = true;
      setPasswordErr("Field cannot be empty");
    } else if (password.length < 8) {
      errorP = true;
      setPasswordErr("Password must be atleast 8 characters long.");
    } else {
      errorP = false;
      setPasswordErr("");
    }
    //confirm password validator

    if (cpassword.length === 0) {
      errorCP = true;
      setCPasswordErr("Field cannot be empty");
    } else if (password !== cpassword) {
      errorCP = true;
      setCPasswordErr("Passwords do-not match.");
    } else {
      errorCP = false;
      setCPasswordErr("");
    }
    //checkBox validator

    if (checkboxValue === "on") {
      errorCB = false;
      setCheckBoxErr("");
    } else {
      errorCB = true;
      setCheckBoxErr("Must be checked!");
    }
    if (!errorF && !errorP && !errorL && !errorCP && !errorCB) {
      console.log({
        fullname: firstName + " " + lastName,
        email: data.get("email"),
        password: data.get("password"),
        confirmPassword: cpassword,
        checkbox: checkboxValue,
      });
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  error={firstNameErr.length !== 0 ? true : false}
                  helperText={firstNameErr}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  error={lastNameErr.length !== 0 ? true : false}
                  helperText={lastNameErr}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  error={emailErr.length !== 0 ? true : false}
                  helperText={emailErr}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  error={passwordErr.length !== 0 ? true : false}
                  helperText={passwordErr}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="cpassword"
                  label="Password"
                  type="password"
                  id="cpassword"
                  autoComplete="new-password"
                  error={cpasswordErr.length !== 0 ? true : false}
                  helperText={cpasswordErr}
                />
              </Grid>
              {checkBoxErr.length !== 0 ? (
                <span style={{ color: "red", fontSize: 12 }}>
                  {checkBoxErr}
                </span>
              ) : (
                <></>
              )}
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox name="checkbox" color="primary" />}
                  label="I agree to Terms and Conditions"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
