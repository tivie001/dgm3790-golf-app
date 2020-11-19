import React, {useState, useContext, createContext} from "react";

const SearchContext = createContext({
    searchTerm: '',
    isLoaded: false,
    loader: ()=>{},
    setSearchTerm: ()=>{}
})


export const SearchContextProvider = (props) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [searchTerm, setSearchVal] = useState('');
    const loadingHandler = (isLoaded) => {
        setIsLoaded(isLoaded);
    }
    const searchHandler = (searchTerm) => {
        setSearchVal(searchTerm);
    }
    return (
        <SearchContext.Provider value={{setSearchTerm: searchHandler, searchTerm: searchTerm, loader: loadingHandler, isLoaded: isLoaded}}>
            {props.children}
        </SearchContext.Provider>
    );
}

export const useSearchContext = () => useContext(SearchContext);