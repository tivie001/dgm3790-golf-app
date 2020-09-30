import React from 'react';
import './App.css';
import Players from "./Players";
import Header from "./Header";
import Tournaments from "./Tournaments";
require('dotenv').config()



function App() {
  return (
    <div className="App">
        <Header/>
        <div className="components-container">
            <Players/>
            <Tournaments/>
        </div>
    </div>
  );
}

export default App;
