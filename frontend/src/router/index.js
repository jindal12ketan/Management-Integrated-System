import { Route, Routes } from "react-router-dom";
import routes from "./routes";
import { Navigate } from "react-router-dom";
import LoginPage from "pages/LoginPage";
import { get } from "utils/lodash";
import T from "T";
import { APPCurrentUser } from "utils/validations";
import ListenerPage from "pages/ListenerPage";
import CreaterPage from "pages/CreaterPage";
import { RequireAuth } from "./RequireAuth";
import { WithoutAuth } from "./WithAuth";
const MainRoute = () => {
  const { sessionToken, user } = APPCurrentUser();
  // const userRole = get(user, "name", "");
  const defaultPath = routes.app.login;
  const redirectPath =
    sessionToken && user.role !== T.CREATER
      ? routes.app.listener
      : sessionToken && user.role !== T.LISTENER
      ? routes.app.creater
      : defaultPath;
  return (
    <Routes>
      <Route path="/" element={<Navigate to={redirectPath} />} />
      <Route
        path={routes.app.listener}
        element={
          <RequireAuth>
            <ListenerPage />
          </RequireAuth>
        }
      />
      <Route
        path={routes.app.creater}
        element={
          <RequireAuth>
            <CreaterPage />
          </RequireAuth>
        }
      />
      <Route
        path={routes.app.login}
        element={
          <WithoutAuth>
            <LoginPage />
          </WithoutAuth>
        }
      />
    </Routes>
  );
};
export default MainRoute;
