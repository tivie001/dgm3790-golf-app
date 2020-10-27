import React, {useState, useContext, createContext} from "react";
import axios from 'axios';


const MusicDataContext = createContext({
    music: [],
    setMusicData: ()=>{}
})


export const MusicDataProvider = (props) => {
    const [musicData, setMusicData] = useState([]);

    const fetchMusicData = (searchTerm) => {
        axios.get('https://itunes.apple.com/search', {
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
            params: {
                country: "US",
                term: searchTerm,
            },

        }).then(res => {
            setMusicData ({
                music: res.data.results
            })
            res.header('Access-Control-Allow-Origin', "*")
        });
    }


    return (
        <MusicDataContext.Provider value={{setMusicData: fetchMusicData, music: musicData}}>
            {props.children}
        </MusicDataContext.Provider>
    );
}

export const useMusicDataContext = () => useContext(MusicDataContext);