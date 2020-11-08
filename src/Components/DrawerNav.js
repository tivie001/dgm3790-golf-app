import React from "react";
import {
    Typography,
    IconButton,
    Toolbar,
    AppBar,
    List,
    ListItem
} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";

function DrawerNav() {
    const theme = createMuiTheme({
        palette: {
            type: "dark"
        }
    })

    return (
        <h1>Drawer Nav</h1>
    )
}

export default DrawerNav;
