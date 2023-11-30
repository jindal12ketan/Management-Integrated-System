import { Navigate } from "react-router-dom";
import { APPCurrentUser } from "utils/validations";
import PropTypes from "prop-types";

export const WithoutAuth = ({ children }) => {
  const { sessionToken } = APPCurrentUser();

  if (sessionToken) {
    return <Navigate to="/" />;
  }
  return children;
};

WithoutAuth.propTypes = {
  children: PropTypes.node.isRequired,
};
