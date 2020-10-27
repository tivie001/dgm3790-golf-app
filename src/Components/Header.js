import React from "react";
import {
    Typography,
    IconButton,
    Toolbar,
    AppBar
} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";

function Header() {
    const theme = createMuiTheme({
        palette: {
            type: "dark"
        }
    })
    return (
        <ThemeProvider theme={theme}>
            <AppBar position="static" color='inherit'>
                <Toolbar className="toolbar-container">
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h5">
                        Music App
                    </Typography>
                    <Typography variant="h6"></Typography>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    )
}

export default Header;
