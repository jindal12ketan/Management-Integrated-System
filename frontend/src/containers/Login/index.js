import React from 'react'
import { Grid, Box, Typography } from "@mui/material";
import LoginForm from 'components/LoginForm';
const Login = () => {
  return (
    <Grid container p="6px 32px">
        <Grid item xs={12} sm={3} m="auto">
        <LoginForm />
      </Grid>
    </Grid>
  )
};

export default Login