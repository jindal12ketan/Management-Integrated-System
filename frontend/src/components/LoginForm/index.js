import React, { useReducer } from "react";
import { useDispatch } from "react-redux";
import T from "T";
import APPTextFeild from "components/common/APPTextFeild";
import { SUCCESS, ERROR } from "theme/color";
import { isEmail } from "utils/validations";
import { IconButton, InputAdornment, Paper } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import APPButton from "components/common/APPButton";
import { useLoginMutation } from "api/login";
import { loginStore } from "slices/loginSlice";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [localState, setLocalState] = useReducer(
    (prevState, newState) => ({ ...prevState, ...newState }),
    {
      email: "",
      password: "",
      rememberMe: false,
      showPassword: false,
    }
  );
  const { email, password, showPassword, rememberMe } = localState;

  const [login, { isFetching }] = useLoginMutation();

  const handleLogin = () => {
    const payload = {
      email,
      password,
    };
    login(payload)
      .unwrap()
      .then((res) => {
        const token = get(res, "token", "");
        const user = get(res, "user", "");

        sessionStorage.setItem("token", token);
        dispatch(loginStore({ user }));

        navigate("/app/home");
      })
      .catch(handleError);
  };

  const handleLogout = () => {
    setLocalState({ isLoggedIn: false, email: "", password: "" });
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
    if (email && password && key === "Enter") {
      handleLogin();
    }
  };
  return (
    <Paper elevation={3} sx={{ p: "32px 20px" }}>
      <div>
        <APPTextFeild
          label={T.EMAIL}
          placeholder={T.EMAIL}
          variant="outlined"
          name="email"
          value={email}
          onKeyDown={handleKeyPress}
          sx={{
            mt: 0.5,
            "& .MuiOutlinedInput-notchedOutline": {
              borderBottom:
                email &&
                `3px solid ${isEmail(email) ? SUCCESS.main : ERROR.main}`,
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
        {/* <Grid container justifyContent="center" alignItems="center">
          <FormControlLabel
            control={<Checkbox sx={{ pr: 0.4 }} checked={rememberMe} onChange={() => setLocalState({ rememberMe: !rememberMe })} />}
            label={
              <Typography variant="subtitle1" noWrap>
                {T.REMEMBER_ME}
              </Typography>
            }
          />

          <Link href={routes.app.forgotPwd} color={NETSMARTZ_THEME_COLOR} underline="none">
            <Typography variant="subtitle1" noWrap>
              {T.FORGOT_PWD}
            </Typography>
          </Link>
        </Grid> */}
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
