import React, {useState, useContext, createContext} from "react";
import axios from 'axios';


const MusicDataContext = createContext({
    music: [],
    setMusicData: ()=>{}
})


export const MusicDataProvider = (props) => {
    const [musicData, setMusicData] = useState([]);
    const headers = {
        'Access-Control-Allow-Origin': '*',
    };

    const fetchMusicData = (searchTerm) => {
        axios.get('https://itunes.apple.com/search', {headers}, {
            params: {
                country: "US",
                term: searchTerm,
            }
        }).then(res => {
            setMusicData ({
                music: res.data.results
            })
        });
    }


    return (
        <MusicDataContext.Provider value={{setMusicData: fetchMusicData, music: musicData}}>
            {props.children}
        </MusicDataContext.Provider>
    );
}

export const useMusicDataContext = () => useContext(MusicDataContext);