import React from "react";
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    IconButton,
    CircularProgress
} from "@material-ui/core";
import {useMusicDataContext} from "../contexts/MusicDataContext";
import Link from "@material-ui/core/Link";
import {useSearchContext} from "../contexts/SearchContext";
import Search from "./Search";


const MusicTable = () => {
    const musicContext = useMusicDataContext();
    const searchContext = useSearchContext();
    // searchContext.loader(false)

    function millisToMinutesAndSeconds(millis) {
        let minutes = Math.floor(millis / 60000);
        let seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }
    function getReleaseYear(date) {
        var d = new Date(date);
        return d.getFullYear();
    }
    return (
        <div>
            <Search/>
            { musicContext.music.length !== 0 ?
                <div className="components-container">
                    {/*{ searchContext.isLoaded ? <CircularProgress />: ''}*/}
                    <div className="table-container">
                        <div>
                            <h1 className="table-heading">Showing Results for...{searchContext.searchTerm}</h1>
                                <TableContainer>
                                    <Table className="table" aria-label="simple table" variant="dark" size="small">
                                        <TableHead className="table-header">
                                            <TableRow>
                                                <TableCell align="left">ALBUM/(PREVIEW)</TableCell>
                                                <TableCell align="left">SONG</TableCell>
                                                <TableCell align="left">ARTIST</TableCell>
                                                <TableCell align="left">ALBUM NAME</TableCell>
                                                <TableCell align="left">RELEASE YEAR</TableCell>
                                                <TableCell align="left">GENRE</TableCell>
                                                <TableCell align="left">TIME</TableCell>
                                                <TableCell align="left"></TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            { musicContext.music.music.map((song) => (
                                                <TableRow key={song.trackId} hover className="table-row">
                                                    <TableCell scope="row" className="album-cover-cell">
                                                        <div className="album-container">
                                                            <img src={song.artworkUrl100} alt={song.collectionName} className="album-image"/>
                                                            <div className="overlay">
                                                                <Link href={song.previewUrl} target="_blank">
                                                                    <IconButton aria-label='settings' className="play-icon">
                                                                        <PlayCircleFilledIcon />
                                                                    </IconButton>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </TableCell>
                                                    <TableCell scope="row">{song.trackName}</TableCell>
                                                    <TableCell align="left">{song.artistName}</TableCell>
                                                    <TableCell align="left">{song.collectionName}</TableCell>
                                                    <TableCell align="left">{getReleaseYear(song.releaseDate)}</TableCell>
                                                    <TableCell align="left">{song.primaryGenreName}</TableCell>
                                                    <TableCell align="left">{millisToMinutesAndSeconds(song.trackTimeMillis)}</TableCell>
                                                    <TableCell align="left"></TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                        </div>
                    </div>
            </div> : (<div className="no-records">
                <h2>To view music data, search above for an artist, song, or album!</h2>
                </div>)
            }
        </div>
    )
}

export default MusicTable;