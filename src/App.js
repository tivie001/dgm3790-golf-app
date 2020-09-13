import React from 'react';
import './App.css';
import Players from "./Players";
import Header from "./Header";

function App() {
  return (
    <div className="App">
        <Header></Header>
        <div className="card-container">
            <Players/>
        </div>
    </div>
  );
}

export default App;
