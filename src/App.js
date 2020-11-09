import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import MusicTable from "./Components/MusicTable";
import Movies from "./Components/Movies";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { ThemeProvider, createMuiTheme} from "@material-ui/core/styles";
import {SearchContextProvider} from "./contexts/SearchContext";
import {MusicDataProvider} from "./contexts/MusicDataContext";
import {LoginContextProvider} from "./contexts/LoginContext";
import Login from "./Components/Login";

const routes = [
    { path: '/music', Component: MusicTable},
    { path: '/movies', Component: Movies},
    { path: '/', Component: Home}
]
const theme = createMuiTheme({
    palette: {
        type: "dark"
    }
})

function App() {

    return (
        <ThemeProvider theme={theme}>
            <LoginContextProvider>
                <MusicDataProvider>
                    <SearchContextProvider>
                        <div className="App">
                            {routes.map(({ path, Component }) => (
                                    <Route key={path} exact path={path}>
                                        {/*<Login/>*/}
                                        <Header/>
                                        <Component />
                                    </Route>
                            ))}
                        </div>
                    </SearchContextProvider>
                </MusicDataProvider>
            </LoginContextProvider>
        </ThemeProvider>
    );
}

export default App;
