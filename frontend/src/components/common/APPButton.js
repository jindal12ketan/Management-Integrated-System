import { Button } from "@mui/material";
import PropTypes from "prop-types";
import { APP_THEME_COLOR } from "theme/color";

const APPButton = ({ children, variant, sx, ...rest }) => {
  return variant !== "outlined" ? (
    <Button
      variant="contained"
      size="small"
      sx={{
        bgcolor: APP_THEME_COLOR,
        "&:hover": {
          bgcolor: APP_THEME_COLOR,
        },
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Button>
  ) : (
    <Button
      variant="outlined"
      size="small"
      color="warning"
      sx={{ ...sx }}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default APPButton;
