import React from "react";
import {
    Card,
    CardContent,
    CardActionArea,
    CardMedia,
    Typography,
    CardActions,
    Button,
    Grid,
    IconButton, ListItem
} from "@material-ui/core";
import AppleMusicImg from '../assets/apple-music-note.jpg';
import MovieImg from '../assets/movie.png';
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import {NavLink} from "react-router-dom";

const Home = () => {

    return (
        <div>
            <Grid container spacing={5} justify="center" className="dashboard">
                <Grid item xs={12} md={5}>
                    <NavLink to='/music' className="link-styles">
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Apple Music Note Logo"
                                    height="250"
                                    image={AppleMusicImg}
                                    title="Apple Music Note Logo"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Music
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Search the entire iTunes Store Library here.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </NavLink>
                </Grid>
                <Grid item xs={12} md={5}>
                    <NavLink to='/movies' className="link-styles">
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Movie Logo"
                                    height="250"
                                    image={MovieImg}
                                    title="Movie Logo"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Movies
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Browse top movies in the entire iTunes Store Library here.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </NavLink>
                </Grid>
            </Grid>
        </div>
    )
}

export default Home;