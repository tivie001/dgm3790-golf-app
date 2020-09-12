import React from 'react';
import './App.css';
import Players from "./Players";

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">*/}
      {/*    <h1>Golf Players</h1>*/}
      {/*    <h4>Tyler Ivie | DGM 3790</h4>*/}
      {/*</header>*/}
        <h1>Golf Players</h1>
        <h4>Tyler Ivie | DGM 3790</h4>
        <div className="card-container">
            <Players/>
        </div>
    </div>
  );
}

export default App;
