import { Route, Routes } from "react-router-dom";
import routes from "./routes";
import Homepage from "pages/HomePage";
import LoginPage from "pages/LoginPage";
const MainRoutes = () => 
{
  return (
    <Routes>
      <Route  
        path={routes.app.home}  
        element={<Homepage />}
      />
      <Route
      path={routes.app.login}
      element={<LoginPage/>}
      />
    </Routes>
  );
};
export default MainRoutes;
