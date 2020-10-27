import React, {useState} from "react";
import {
    TextField
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {useSearchContext} from "../contexts/SearchContext";
import {useMusicDataContext} from "../contexts/MusicDataContext";


const Search = () => {
    const [searchTerm, setSearchVal] = useState('');
    const searchContext = useSearchContext();
    const musicContext = useMusicDataContext();

    const submitSearchHandler = () => {
        searchContext.setSearchTerm(searchTerm);
        musicContext.setMusicData(searchTerm);
    }
    return (
        <div className="input-container">
            <TextField
                className="searchBox"
                id="outlined-password-input"
                label="Search Artist, Song, or Album"
                variant="outlined"
                value={searchTerm}
                onChange={(event) => {
                    setSearchVal(event.target.value);
                }}
                onKeyPress={(ev) => {
                    if (ev.key === 'Enter') {
                        ev.preventDefault();
                        submitSearchHandler();
                    }
                }}
            />
            <div className="btn-container">
                <Button className="search-btn" variant="contained" onClick={submitSearchHandler} type="submit">Search</Button>
            </div>
        </div>
    );
}

export default Search;