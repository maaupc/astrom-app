import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RouterDos from "./routes/RouterDos";
import ProtectedRoute from "./routes/ProtectedRoute";
import Login from "./pages/Login";



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
