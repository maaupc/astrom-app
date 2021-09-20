import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./pages/Login";
import RouterDos from "./routes/RouterDos";
import ProtectedRoute from "./routes/ProtectedRoute";
import EmpleadosTable from "./components/EmpleadosTable";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={EmpleadosTable} />
        <ProtectedRoute path="/" component={RouterDos} />
      </Switch>
    </Router>
  );
}

export default App;
