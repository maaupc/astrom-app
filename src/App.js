import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import Login from "./pages/Login";
import Filtros from "./components/Filtros"
import RouterDos from "./routes/RouterDos";
import ProtectedRoute from "./routes/ProtectedRoute";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Filtros} />
        <ProtectedRoute path="/" component={RouterDos} />
      </Switch>
    </Router>
  );
}

export default App;
