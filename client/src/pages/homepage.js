import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from '../components/navbar/navbar';
import Header from '../components/header/header';
import SearchBar from '../components/searchbar/searchbar';
import Results from '../components/results/results';
import Saved from './saved'

const homepage = () => {
    return (
        <Router>
        <div>
            <Switch>
                <Route exact path ="./saved" component= {Saved}/>
            </Switch>
            <Navbar/>
            <Header/>
            <SearchBar/>
            <Results/>
        </div>
        </Router>
    )
};

export default homepage;