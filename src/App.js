import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Footer from "./components/Footer";
import Login from "./pages/Login";
import RouterDos from "./routes/RouterDos";
import ProtectedRoute from "./routes/ProtectedRoute";


function App() {
  return (
    <div className="page-container ">
    <div className="content-wrap">

    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <ProtectedRoute path="/" component={RouterDos} />
      </Switch>
       
    </Router>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
