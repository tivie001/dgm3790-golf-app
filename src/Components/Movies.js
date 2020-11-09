import React, {useEffect, useState} from "react";
import axios from "axios";
import {
    Card,
    CardMedia,
    CardHeader,
    CardContent,
    CardActions,
    Typography,
    IconButton, Grid, CardActionArea
} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import MovieImg from "../assets/movie.png";
import AppleMusicImg from '../assets/apple-music-note.jpg';
import Button from "@material-ui/core/Button";



const Movies = () => {
    const [movieData, setMovieData] = useState([]);

    useEffect(() => {
        const fetchMovieData = async () => {
            try {
                const response = await axios.get(
                    `https://itunes.apple.com/search`,
                    {
                        params: {
                            country: "US",
                            media: "movie",
                            entity: 'movie',
                            attribute: 'actorTerm'
                        }
                    }
                )
                const movies = await response.data.results;
                console.log(movies);
                setMovieData(movies);

            } catch (error) {
                console.log(error)
            }
        }
        fetchMovieData()

    }, [])

    return (
        <div>
            <Grid container spacing={5} justify="center" className="dashboard">
                {
                    movieData.map((movie) => (
                        <Grid item xs={12} md={5} key={movie.trackId}>
                            <Card>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt={movie.trackName}
                                        height="100"
                                        image={movie.artworkUrl100}
                                        title={movie.trackName}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {movie.trackName}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {movie.longDescription}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Share
                                    </Button>
                                    <Button size="small" color="primary">
                                        Learn More
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))
                }

            </Grid>
        </div>
    )
}

export default Movies;