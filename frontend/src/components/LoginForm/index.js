import React, { useReducer } from "react";
import T from "T";
import APPTextFeild from "components/common/APPTextFeild";
import { SUCCESS, ERROR } from "theme/color";
import { isEmail } from "utils/validations";
import { IconButton, InputAdornment, Paper } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import APPButton from "components/common/APPButton";
const LoginForm = () => {
  const [localState, setLocalState] = useReducer(
    (prevState, newState) => ({ ...prevState, ...newState }),
    {
      userName: "",
      password: "",
      isLoggedIn: false,
      showPassword: false,
    }
  );
  const { userName, password, isLoggedIn, showPassword } = localState;

  const handleLogin = () => {
    if (userName && password) {
      setLocalState({ isLoggedIn: true });
    }
  };

  const handleLogout = () => {
    setLocalState({ isLoggedIn: false, userName: "", password: "" });
  };
  const handleShowPassword = () => {
    if (showPassword) {
      setLocalState({ showPassword: false });
    } else {
      setLocalState({ showPassword: true });
    }
  };
  const onHandleChange = (event) => {
    const { name, value } = event.target;
    setLocalState({ [name]: value });
  };

  const handleKeyPress = (e) => {
    const { key } = e;
    if (userName && password && key === "Enter") {
      handleLogin();
    }
  };
  return (
    <Paper elevation={3} sx={{ p: "32px 20px" }}>
      <div>
        <APPTextFeild
          label={T.USERNAME}
          placeholder={T.USERNAME}
          variant="outlined"
          name="userName"
          value={userName}
          onKeyDown={handleKeyPress}
          sx={{
            mt: 0.5,
            "& .MuiOutlinedInput-notchedOutline": {
              borderBottom:
                userName &&
                `3px solid ${isEmail(userName) ? SUCCESS.main : ERROR.main}`,
            },
            "& .MuiOutlinedInput-input": {
              padding: "9.5px 14px",
              fontSize: 14,
            },
          }}
          fullWidth
          onChange={onHandleChange}
        />
        <APPTextFeild
          label={T.PASSWORD}
          placeholder={T.PASSWORD}
          variant="outlined"
          name="password"
          type={showPassword ? "text" : "password"}
          value={password}
          onKeyDown={handleKeyPress}
          sx={{
            mb: 1,
            mt: 0.5,
            "& .MuiOutlinedInput-input": {
              padding: "9.5px 14px",
              fontSize: 14,
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment
                aria-label="toggle password visibility"
                onClick={handleShowPassword}
                position="end"
                sx={{ ml: 1.5 }}
              >
                <IconButton>
                  {showPassword ? (
                    <VisibilityOff fontSize="small" />
                  ) : (
                    <Visibility fontSize="small" />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
          fullWidth
          onChange={onHandleChange}
        />
        <APPButton
          variant="contained"
          size="medium"
          sx={{ my: 5 }}
          onClick={handleLogin}
          fullWidth
        >
          {T.LOGIN}
        </APPButton>
      </div>
    </Paper>
  );
};

export default LoginForm;
