import React from 'react';
import './App.css';
import MusicTable from "./Components/MusicTable";
import Header from "./Components/Header";
import { ThemeProvider, createMuiTheme} from "@material-ui/core/styles";
import Search from "./Components/Search";
import {SearchContextProvider} from "./contexts/SearchContext";
import {MusicDataProvider} from "./contexts/MusicDataContext";
import {LoginContextProvider} from "./contexts/LoginContext";
import Login from "./Components/Login";


function App() {
    const theme = createMuiTheme({
        palette: {
            type: "dark"
        }
    })
    return (
        <ThemeProvider theme={theme}>
            <LoginContextProvider>
                <MusicDataProvider>
                    <SearchContextProvider>
                        <div className="App">
                            <Login/>
                            <Header/>
                            <Search/>
                            <div className="components-container">
                                <MusicTable/>
                            </div>
                        </div>
                    </SearchContextProvider>
                </MusicDataProvider>
            </LoginContextProvider>
        </ThemeProvider>
    );
}

export default App;
