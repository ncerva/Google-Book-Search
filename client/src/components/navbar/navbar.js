import React from 'react'
import "./navbar.css"

function navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="/">
        Google Book Search
        <a href='../pages/homepage.js'> Search </a>
        <a href='../pages/saved.js'> Saved </a>
        </a>
    </nav>
    )
}

export default navbar;
