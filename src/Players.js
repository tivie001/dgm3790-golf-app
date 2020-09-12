import React, { Component } from "react";
import golfData from './golf.json';

const players = golfData.filter((player => player.BirthState));

class Players extends Component {
    render() {
        return (
            <div className="card-container">
                {
                    players.map(player => {
                        return (
                            <div className="player-card" key={player.PlayerID}>
                                <img src={player.PhotoUrl}/>
                                <div className="player-details">
                                    <h4>{ player.FirstName } { player.LastName }</h4>
                                    <small>{ player.BirthCity }, { player.BirthState }</small>
                                    <small className="labels">Birthplace</small>
                                    <small>{player.College ? player.College : ''}</small>
                                    <small className="labels">College</small>
                                </div>

                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Players;