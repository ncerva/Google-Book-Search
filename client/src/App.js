import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./pages/saved";
import Navbar from "./components/navbar/navbar";
import Search from "./components/searchbar/searchbar"

function App() {
  return (
    <Router>
    <div>
      <Navbar/>
    <Switch>
    <Route exact path="/" component={Search} />
    <Route exact path="/search" component={Search} />
    <Route exact path="/saved" component={Saved} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
