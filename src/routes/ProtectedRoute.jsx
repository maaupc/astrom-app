import React from "react";

import { Route, Redirect, Switch } from "react-router-dom";
import Error404 from "../pages/Error404";

const ProtectedRoute = ({ component: Component, ...resto }) => {
  const auth = JSON.parse(localStorage.getItem("auth")) || null;

  return (
    <Route
      {...resto}
      render={(props) => {
        if(props.location.pathname === "/error404"){
          return <Error404/>
        }

        if (auth?.empleado.uid) { 
          return <Component {...props} />;
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
};

export default ProtectedRoute;