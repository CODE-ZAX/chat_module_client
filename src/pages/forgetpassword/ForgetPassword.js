import React from "react";
import { Typography, TextField, Button, Link, Grid } from "@mui/material";
import { Link as Lnk } from "react-router-dom";
import styles from "./ForgetPassword.module.css";

const ForgetPassword = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submit logic
  };

  return (
    <div className={styles.container}>
      <Typography variant="h4" className={styles.title}>
        Forgot Password
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email Address"
          variant="outlined"
          type="email"
          fullWidth
          required
          className={styles.input}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          className={styles.submitBtn}
        >
          Reset Password
        </Button>
      </form>
      <Typography variant="body1" className={styles.text}>
        Remember your password?{" "}
        <Lnk to="/login">
          <Link variant={"body1"}>Login</Link>
        </Lnk>
      </Typography>
    </div>
  );
};

export default ForgetPassword;
