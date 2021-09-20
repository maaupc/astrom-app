import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Inicio from "./pages/Inicio";
import Login from "./pages/Login";
import RouterDos from "./routes/RouterDos";
import ProtectedRoute from "./routes/ProtectedRoute";



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <ProtectedRoute path="/" component={RouterDos} />
      </Switch>
    </Router>
  );
}

export default App;
