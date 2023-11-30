import { useLocation, Navigate } from "react-router-dom";
import { APPCurrentUser } from "utils/validations";
import PropTypes from "prop-types";

export const RequireAuth = ({ children }) => {
  const { sessionToken } = APPCurrentUser();
  const location = useLocation();

  if (!sessionToken) {
    return <Navigate to="/app/login" state={{ from: location }} replace />;
  }
  return children;
};
RequireAuth.propTypes = {
  children: PropTypes.node.isRequired,
};
