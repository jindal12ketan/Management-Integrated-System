import PropTypes from "prop-types";
import { TextField } from "@mui/material";
import { KeyboardArrowDownRounded } from "@mui/icons-material";
import React from "react";
import APPInputLabel from "./APPInputLabel";
const APPTextFeild = ({
  label,
  disabled,
  required,
  endIcon,
  variant = "outlined",
  error,
  autoComplete = "off",
  readOnly = false,
  InputProps = {},
  SelectProps = {},
  deprecatedLabel = true,
  multiline = false,
  rows = 6,
  ...rest
}) => {
  const helperText = rest?.helperText;
  return (
    <APPInputLabel label={deprecatedLabel && label} required={required} endIcon={endIcon} error={error}>
      <TextField
        disabled={disabled}
        InputProps={{ ...InputProps, readOnly }}
        variant={variant}
        multiline={multiline}
        autoComplete={autoComplete}
        required={required}
        rows={multiline ? rows : ""}
        label={deprecatedLabel ? null : label}
        {...rest}
        error={Boolean(error)}
        helperText={helperText}
        SelectProps={{
          ...SelectProps,
          IconComponent: (props) => <KeyboardArrowDownRounded {...props} />,
          MenuProps: {
            elevation: 0,
            PaperProps: {
              sx: {
                boxShadow:
                  "0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)",
                maxHeight: 200,
              },
              variant: "outlined",
            },
          },
        }}
      />
    </APPInputLabel>
  );
};
APPTextFeild.propTypes = {
  label: PropTypes.string,
  autoComplete: PropTypes.string,
  required: PropTypes.bool,
  endIcon: PropTypes.node,
  variant: PropTypes.oneOf(["filled", "outlined", "standard"]),
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  SelectProps: PropTypes.object,
  InputProps: PropTypes.object,
  deprecatedLabel: PropTypes.bool,
  multiline: PropTypes.bool,
  rows: PropTypes.number,
};
export default APPTextFeild;
