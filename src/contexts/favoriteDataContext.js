import React, { createContext, useContext, useState } from 'react';

const FavoriteDataContext = createContext({
    favoriteData: [],
    setFavoriteData: () => { }
});

const FavoriteDataContextProvider = ({ children }) => {
    const [favoriteData, setFavoriteData] = useState([]);

    return (
        <FavoriteDataContext.Provider value={{ favoriteData, setFavoriteData }}>
            {children}
        </FavoriteDataContext.Provider>
    );
};

const useFavoriteDataContext = () => useContext(FavoriteDataContext) 

export { FavoriteDataContextProvider, useFavoriteDataContext };
