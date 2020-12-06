import React, {useState} from "react";
import {
    Typography,
    IconButton,
    Toolbar,
    AppBar,
    Drawer,
    List,
    ListItem, Divider, Icon,
} from "@material-ui/core";

import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MenuIcon from '@material-ui/icons/Menu';
import AlbumIcon from '@material-ui/icons/Album';
import TheatersIcon from '@material-ui/icons/Theaters';
import RadioIcon from '@material-ui/icons/Radio';
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";
import {NavLink} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";


function Header() {
    const theme = createMuiTheme({
        palette: {
            type: "dark"
        }
    })
    const [drawerOpen, setDrawerOpen] = useState(false)
    const { user } = useAuth0();
    const { logout } = useAuth0();
    // console.log(user);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen)
    }

    return (
        <ThemeProvider theme={theme}>
            <AppBar position="static" color='inherit'>
                <Toolbar className="toolbar-container">
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h4">
                        Entertainment App
                    </Typography>
                    <Typography variant="h6">
                        <div className="profile-info">
                            {
                                user ? 'Welcome, ' + user.name : ""
                            }
                            {
                                user ? <img className="profile-img" src={user.picture} alt={user.name}/> : ""
                            }
                            <div className="logout-btn">
                                <IconButton edge="start" color="inherit" aria-label="menu" onClick={() =>
                                    logout({
                                        returnTo: window.location.origin,
                                    })
                                }>
                                    <ExitToAppIcon />
                                </IconButton>
                            </div>
                        </div>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer open={drawerOpen} onClose={handleDrawerToggle} className="drawer">

                <h3 className="drawer-header">Entertainment App</h3>
                <div className="icon-row">
                    <Icon>
                        <AlbumIcon />
                    </Icon>
                    <Icon>
                        <TheatersIcon />
                    </Icon>
                    <Icon>
                        <RadioIcon />
                    </Icon>
                </div>

                <Divider/>
                <List className="drawer">
                    <ListItem>
                        <NavLink to='/' className="link-styles" onClick={handleDrawerToggle}>
                            Home
                        </NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink to='/music' className="link-styles" onClick={handleDrawerToggle}>
                            Music
                        </NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink to='/movies' className="link-styles" onClick={handleDrawerToggle}>
                            Movies
                        </NavLink>
                    </ListItem>
                </List>
            </Drawer>
        </ThemeProvider>
    )
}

export default Header;
