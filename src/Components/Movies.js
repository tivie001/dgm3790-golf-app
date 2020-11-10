import React, {useEffect, useState} from "react";
import axios from "axios";
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    Grid,
    CardActionArea
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        minHeight: 200
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        minWidth: 151,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
}));


const Movies = () => {
    const classes = useStyles();

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
        <div className="movie-items-container">
            <Grid container spacing={6} justify="center" className="dashboard">
                {
                    movieData.map((movie) => (
                        <Grid item xs={12} md={3} key={movie.trackId}>
                            <Card className={classes.root}>
                                <CardMedia
                                    className={classes.cover}
                                    image={movie.artworkUrl100}
                                    title={movie.trackName}
                                />
                                <CardActionArea>
                                    <div className={classes.details}>
                                        <CardContent className={classes.content}>
                                            <Typography component="h5" variant="h5">
                                                {movie.trackName}
                                            </Typography>
                                            <Typography variant="subtitle1" color="textSecondary">
                                                { movie.artistName }
                                            </Typography>
                                            <Typography variant="caption" color="textSecondary">
                                                { movie.shortDescription }
                                            </Typography>
                                        </CardContent>
                                    </div>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))
                }
            </Grid>

        </div>
    )
}

export default Movies;