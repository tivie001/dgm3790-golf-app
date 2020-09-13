import React from "react";
import golfData from './golf.json';

const player = golfData.filter((player => player.FirstName === "Tiger"));
console.log(player);

function Header() {
    return (
        <div className="header">
            <h1>Golf Players</h1>
            <h3>Tyler Ivie | DGM 3790</h3>
            <h5>My favorite golfer:</h5>
            <img src={player[0].PhotoUrl} alt="Tiger Woods"/>
            <h5>{ player[0].FirstName } { player[0].LastName }</h5>
        </div>
    )
}

export default Header;