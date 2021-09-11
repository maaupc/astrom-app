import React from "react";

import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...resto }) => {
  const auth = JSON.parse(localStorage.getItem("auth")) || null;

  return (
    <Route
      {...resto}
      render={(props) => {
        if (auth?.usuario.uid) { //esto es nuevo en javascript. sirve para ver si en auth hay un usuario con un uid.
          return <Component {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default ProtectedRoute;