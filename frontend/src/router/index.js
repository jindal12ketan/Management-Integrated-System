import { Route, Routes } from "react-router-dom";
import routes from "./routes";
import { Navigate } from "react-router-dom";
import { get } from "utils/lodash";
import T from "T";
import { APPCurrentUser } from "utils/validations";
import { LoginPage, ListenerPage, CreatorPage } from "pages";
import { RequireAuth } from "./RequireAuth";
import { WithoutAuth } from "./WithAuth";
import { canViewCreator, canViewListener } from "utils/permissions";
import SettingPage from "pages/SettingPage";
const MainRoute = () => {
  const { sessionToken, user } = APPCurrentUser();
  const userRole = get(user.role, "name", "");
  const defaultPath = routes.app.login;
  const redirectPath =
    sessionToken && userRole !== T.CREATOR
      ? routes.app.listener
      : sessionToken && userRole !== T.LISTENER
      ? routes.app.creator
      : defaultPath;
  return (
    <Routes>
      <Route path="/" element={<Navigate to={redirectPath} />} />

      <Route
        path={routes.app.login}
        element={
          <WithoutAuth>
            <LoginPage />
          </WithoutAuth>
        }
      />

      {canViewListener() && (
        <Route
          path={routes.app.listener}
          element={
            <RequireAuth>
              <ListenerPage />
            </RequireAuth>
          }
        />
      )}

      {canViewCreator() && (
        <Route
          path={routes.app.creator}
          element={
            <RequireAuth>
              <CreatorPage />
            </RequireAuth>
          }
        />
      )}
      {
        canViewCreator() && (
          <Route
            path={routes.app.setting}
            element={
              <RequireAuth>
                <SettingPage />
              </RequireAuth>
            }
          />
        )
        
      }
    </Routes>
  );
};
export default MainRoute;
