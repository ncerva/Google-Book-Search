import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './homepage'

export default function searchresults() {
    return (
        <Router>
        <div>
            <Switch>
            <Route exact path ="/" component={Home}/>
            </Switch>
        </div>
        </Router>
    )
}
