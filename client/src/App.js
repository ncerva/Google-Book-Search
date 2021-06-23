import React from 'react';
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import Results from "./components/results/results";
import Searchbar from "./components/searchbar/searchbar";

function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Searchbar/>
      <Results/>
    </div>
  );
}

export default App;
