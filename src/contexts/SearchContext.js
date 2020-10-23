import React, {useState, useContext, createContext} from "react";

const SearchContext = createContext({
    searchTerm: '',
    setSearchTerm: ()=>{}
})


export const SearchContextProvider = (props) => {
    const [searchTerm, setSearchVal] = useState('');
    const searchHandler = (searchTerm) => {
        setSearchVal(searchTerm);
    }

    return (
        <SearchContext.Provider value={{setSearchTerm: searchHandler, searchTerm: searchTerm}}>
            {props.children}
        </SearchContext.Provider>
    );
}

export const useSearchContext = () => useContext(SearchContext);