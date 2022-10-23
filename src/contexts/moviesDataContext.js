import React, { createContext, useContext, useState } from 'react';
import { MovieDummy } from '../utils/Film';

const MoviesDataContext = createContext({
    moviesData: MovieDummy,
    setMoviesData: () => { }
});

const MoviesDataContextProvider = ({ children }) => {
    const [moviesData, setMoviesData] = useState();

    return (
        <MoviesDataContext.Provider value={{ moviesData, setMoviesData }}>
            {children}
        </MoviesDataContext.Provider>
    );
}

const useMoviesDataContext = () => useContext(MoviesDataContext)

export { MoviesDataContextProvider, useMoviesDataContext };