import { InputLabel, styled, Typography } from "@mui/material";
import PropTypes from "prop-types";
const StyledInputLabel = styled(InputLabel)(({ theme }) => ({
  textAlign: "left",
  ...theme.typography.subtitle2,
  lineHeight: "24px",
  color: theme.palette.text.secondary,
  display: "flex",
  "& .MuiFormLabel-asterisk": {
    color: "#aa2b2b",
  },
}));

const APPInputLabel = ({
  children,
  label = "",
  required = false,
  endIcon,
  error = false,
}) => (
  <>
    {label ? (
      <>
        <StyledInputLabel
          required={required}
          shrink={false}
          error={Boolean(error)}
        >
          <Typography variant="body1" color="text.label">
            {label}
          </Typography>
          {endIcon}
        </StyledInputLabel>
        {children}
      </>
    ) : (
      { children }
    )}
  </>
);

APPInputLabel.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  required: PropTypes.bool,
  endIcon: PropTypes.node,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default APPInputLabel;
