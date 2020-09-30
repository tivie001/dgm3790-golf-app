import React, {useState, useEffect} from "react";
import axios from 'axios';
import {
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    Typography
} from "@material-ui/core";
import { ThemeProvider, createMuiTheme} from "@material-ui/core/styles";
import eastLakeImg from '../src/assets/east-lake-golf.jpg';
import olympiaImg from '../src/assets/olympia.jpeg';
import tpcImg from '../src/assets/tpc-boston.jpg';
import sedgefieldImg from '../src/assets/sedgefield-golf-course.jpg';


function Tournaments() {
    const theme = createMuiTheme({
        palette: {
            type: "dark"
        }
    })
    const courseImages = [eastLakeImg, olympiaImg, tpcImg, sedgefieldImg];
    const [tourneyData, setTourneyData] = useState({
        tournaments: []
    })
    const fetchTourneys = () => {
        axios.get('https://api.sportsdata.io/golf/v2/json/Tournaments/2020', {
            params: {
                key: process.env.REACT_APP_SPORTS_DATA_API_KEY
            }
        }).then(res => {
            setTourneyData ({
                tournaments: res.data.slice(0, 4)
            })
        });
    }
    useEffect(() => {
        fetchTourneys()
    }, [])

    return (
        <ThemeProvider theme={theme}>
            <div className="card-container">
                <h1 className="table-heading">Upcoming Tournaments</h1>
                { tourneyData.tournaments.map((tourney, index) => (
                    <Card key={tourney.TournamentID} className="card">
                        <CardHeader
                            title={tourney.Name}
                            subheader={tourney.StartDate.split("T")[0]}
                        />
                        <CardMedia
                            className="card-image"
                            image={courseImages[index]}
                            title={tourney.Location}
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p" className="card-details">
                                <li>{tourney.Venue}</li>
                                <li>{tourney.Location}</li>
                                <li>Par: {tourney.Par}</li>
                                <li>Total Yards (Course): {tourney.Yards}</li>
                                <li>Purse: ${tourney.Purse}</li>
                                <li>Number of Rounds: {tourney.Rounds.length}</li>
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </ThemeProvider>
    );
}

export default Tournaments;