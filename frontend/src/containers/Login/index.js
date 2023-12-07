import { Children, useEffect } from "react";

import { Grid, Box, Typography } from "@mui/material";
import LoginForm from "components/LoginForm";
import MuzicomLogo from "assets/MuzicomLogo.png";
import LoginImage1 from "assets/LoginImage1.png";
import LoginImage2 from "assets/LoginImage2.jpg";
import APPCarousel from "components/common/APPCarousel";
import { LOGIN_CAROUSAL_DATA } from "settings/constants/auth";
import { clearCache } from "utils/clearCache";
import { GET_SIZE } from "utils/responsive";
const Login = () => {
  useEffect(() => {
    clearCache();
  }, []);

  const { isXs } = GET_SIZE();
  return (
    <Grid container p="6px 32px">
      <Grid
        item
        xs={12}
        sm={9}
        display={isXs ? "block" : "grid"}
        minWidth={isXs ? "100%" : "auto"}
        textAlign="center"
        sx={{
          ".carousel .slide img": {
            maxWidth: "36%",
          },
        }}
      >
        <Box component="img" src={MuzicomLogo} margin="auto" maxWidth="19%" />
        <APPCarousel>
          {Children.toArray(
            LOGIN_CAROUSAL_DATA.map((record, index) => (
              <>
                <Box
                  component="img"
                  src={index < 1 ? LoginImage1 : LoginImage2}
                  mt={3}
                  margin="auto"
                  maxWidth="inherit"
                />

                <Typography variant="h5" fontSize={19}>
                  {record.title}
                </Typography>
                <Typography
                  variant="body1"
                  mt={2}
                  mb={5}
                  p="0 50px"
                  fontSize={14}
                >
                  {record.details}
                </Typography>
              </>
            ))
          )}
        </APPCarousel>
      </Grid>
      <Grid item xs={12} sm={3} m="auto">
        <LoginForm />
      </Grid>
    </Grid>
  );
};

export default Login;
