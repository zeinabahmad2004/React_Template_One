// now what we're about to write here is not necessarily a component even it kind of looks like one
// what's it's really meant to do is provide some global state and some helper functions that we can use from multiple places whitin our application
// so this is kind of the state manager for our favorite movie

import { createContext, useState , useContext, useEffect } from "react";

// create a context
const MovieContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useMovieContext = () => useContext(MovieContext);
// this provider is provide state to any of the components that are wrapped around it
// so what it does is it just kind of sits on top of them or around them ReadableByteStreamController, and it allows them to hook into or get access to 
// specific function or specific state when they nedd to use it
// so what we're going to do is we're going to wrap our entire app in this MovieProvider context and thats going to allow the entire app to have access to some state that we define
export const MovieProvider = ({children}) => {
    // so now what we can do is we can start defining all of the logic and the state related to our favorite movies
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        // the first thing we're going to do is we're going to look inside of our local storage and see if we already have any favorite movies
        // and we can store items based on different string keys
        const storedFavs = localStorage.getItem("favorites");

        if (storedFavs) setFavorites(JSON.parse(storedFavs));
    }, [])
    // so what we're saying here is any time this favorite state changes we want to update what we're storing in localstorage
    useEffect(()=>{
        localStorage.setItem('favorites', JSON.stringify(favorites))
    },[favorites])

    // and there's three main operation that we need to have inside of here one operation to add the favorites and to remove and to check
    const addToFavorites = (movie) => {
        // i want to add the new with the previous values
        setFavorites(prev => [...prev, movie])
    }

    const removeFromFavorites = (movieId) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieId))
    }

    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId)
    }

    // if we want to be this functions and state accessible to any of this children that wrapped inside of this provider then we need to provide a value in the provider
    // this value equal to and we can specify in a javascript object all of the values that we want to provide to the children
    const value = {
        favorites,
        isFavorite,
        addToFavorites,
        removeFromFavorites
    }
    return <MovieContext.Provider value={value}>
        {/* we're just going to render our children */}
        {children}
    </MovieContext.Provider>
}
// children is a reserved prop when you write a component and children is anything that's inside of the component that you rendered example: the BrowserRouter has children equal to app
// because we put this App component inside of the BrowserRouter (even if we didn't manually define)
// so what we're doing is we're defining this children property and then we can use that in anything that's put inside of this provider will be treated as children



// Local Storage:
// allow us to store values directly within our browser , local storage can only store strings 