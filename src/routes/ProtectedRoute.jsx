import React from "react";

import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...resto }) => {
  const auth = JSON.parse(localStorage.getItem("auth")) || null;

  return (
    <Route
      {...resto}
      render={(props) => {
        if (auth?.empleado.uid) { 
          return <Component {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default ProtectedRoute;