import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/homepage";
import Saved from "./pages/saved"

function App() {
  return (
    <Router>
    <div>
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/saved" component={Saved} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
