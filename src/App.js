import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import RouterDos from "./routes/RouterDos";
import ProtectedRoute from "./routes/ProtectedRoute";
// import Navbar from './components/Navbar';
// import Licencias from "./pages/Licencias";



function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Switch>
        <Route exact path="/" component={Login} />
        <ProtectedRoute path="/" component={RouterDos} />
      </Switch>
       
    </Router>
  );
}

export default App;
