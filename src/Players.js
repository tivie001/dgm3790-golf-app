import React, {useState, useEffect} from "react";
import axios from 'axios';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@material-ui/core";
import { ThemeProvider, createMuiTheme} from "@material-ui/core/styles";

function Players() {
    const theme = createMuiTheme({
        palette: {
            type: "dark"
        }
    })
    const [playerData, setPlayerData] = useState({
        players: []
    })
    const fetchPlayerData = () => {
        axios.get('https://api.sportsdata.io/golf/v2/json/PlayerSeasonStats/2020', {
            params: {
                key: process.env.REACT_APP_SPORTS_DATA_API_KEY
            }
        }).then(res => {
            setPlayerData ({
                players: res.data.filter(player => (player.WorldGolfRank <= 25) && (player.WorldGolfRank !== null) && (player.PlayerID !== 40002471))
            })
            console.log(res);
        });
    }
    useEffect(() => {
        fetchPlayerData()
    }, [])

    return (
        <ThemeProvider theme={theme}>
            <div className="table-container">
                <div>
                    <h1 className="table-heading">2020 Leaderboard</h1>
                    <TableContainer>
                        <Table className="table" aria-label="simple table" variant="dark" size="small">
                            <TableHead className="table-header">
                                <TableRow>
                                    <TableCell>Rank #</TableCell>
                                    <TableCell align="left"></TableCell>
                                    <TableCell align="left">Name</TableCell>
                                    <TableCell align="left">Points Gained (2020)</TableCell>
                                    <TableCell align="left">Points Lost (2020)</TableCell>
                                    <TableCell align="left">Total Points (2020)</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                { playerData.players.map((player) => (
                                    <TableRow key={player.PlayerID} hover>
                                        <TableCell component="th" scope="row">
                                            {player.WorldGolfRank}
                                        </TableCell>
                                        <TableCell align="left">
                                            <img src={`https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/golf/low-res/${player.PlayerID}.png`} alt={player.FirstName}/>
                                        </TableCell>
                                        <TableCell align="left">{player.Name}</TableCell>
                                        <TableCell align="left">{player.PointsGained}</TableCell>
                                        <TableCell align="left">{player.PointsLost}</TableCell>
                                        <TableCell align="left">{player.TotalPoints}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default Players;