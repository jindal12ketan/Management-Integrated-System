import React, { useReducer } from "react";
import { useDispatch } from "react-redux";
import T from "T";
import APPTextFeild from "components/common/APPTextFeild";
import { SUCCESS, ERROR, APP_THEME_COLOR } from "theme/colors";
import { isEmail } from "utils/validations";
import {
  Checkbox,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import APPButton from "components/common/APPButton";
import { useLoginMutation } from "api/login";
import { loginStore } from "slices/loginSlice";
import { handleError } from "utils/error";
import { get } from "utils/lodash";
import { Link, useNavigate } from "react-router-dom";
import routes from "router/routes";

const LoginForm = () => {
  const navigate = useNavigate();
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
        console.log(user);
        if (rememberMe) {
          dispatch(loginStore({ token, rememberMe, user }));
        } else {
          sessionStorage.setItem("token", token);
          dispatch(loginStore({ user }));
        }
        navigate("/app/home");
      })
      .catch(handleError);
  };

  const handleLogout = () => {
    setLocalState({ isLoggedIn: false, email: "", password: "" });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
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
      {isFetching && <MISLoader />}
      <Typography variant="h5" textAlign="center" mt={2} fontSize={22}>
        {T.LOGIN.toUpperCase()}
      </Typography>

      <Typography variant="body1" mt={5}>
        {T.EMAIL}
      </Typography>

      <TextField
        placeholder={T.EMAIL}
        variant="outlined"
        name="email"
        value={email}
        onKeyDown={handleKeyPress}
        sx={{
          // mb: !isEmail(email) ? 0 : 2,
          mt: 0.5,
          "& .MuiOutlinedInput-notchedOutline": {
            borderBottom: email && `3px solid ${isEmail(email) ? SUCCESS.main : ERROR.main}`,
          },
          "& .MuiOutlinedInput-input": {
            padding: "9.5px 14px",
            fontSize: 14,
          },
        }}
        fullWidth
        required
        onChange={onHandleChange}
      />

      {email && !isEmail(email) && (
        <Typography variant="subtitle2" color="error.main">
          {`${T.INCORRECT} ${T.EMAIL}`}
        </Typography>
      )}

      <Typography variant="body1" mt={3}>
        {T.PASSWORD}
      </Typography>

      <OutlinedInput
        id="outlined-size-normal"
        placeholder={T.PASSWORD}
        name="password"
        value={password}
        type={showPassword ? "text" : "password"}
        variant="outlined"
        sx={{
          mb: 1,
          mt: 0.5,
          "& .MuiOutlinedInput-input": {
            padding: "9.5px 14px",
            fontSize: 14,
          },
        }}
        fullWidth
        required
        onKeyDown={handleKeyPress}
        onChange={onHandleChange}
        endAdornment={
          <InputAdornment
            aria-label="toggle password visibility"
            onClick={handleShowPassword}
            onMouseDown={handleMouseDownPassword}
            position="end"
            sx={{ ml: 1.5 }}
          >
            <IconButton>{showPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}</IconButton>
          </InputAdornment>
        }
      />

      <Grid container justifyContent="center" alignItems="center">
        <FormControlLabel
          control={<Checkbox sx={{ pr: 0.4 }} checked={rememberMe} onChange={() => setLocalState({ rememberMe: !rememberMe })} />}
          label={
            <Typography variant="subtitle1" noWrap>
              {T.REMEMBER_ME}
            </Typography>
          }
        />

        <Link  color={APP_THEME_COLOR} underline="none">
          <Typography variant="subtitle1" noWrap>
            {T.FORGOT_PWD}
          </Typography>
        </Link>
      </Grid>

      <APPButton variant="contained" size="medium" sx={{ my: 5 }} onClick={handleLogin} fullWidth>
        {T.LOGIN}
      </APPButton>
    </Paper>
  );
};

export default LoginForm;
