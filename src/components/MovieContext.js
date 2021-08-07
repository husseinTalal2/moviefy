import React, { createContext, useReducer } from "react";

export const MovieContext = createContext();
const SET_MOVIES = "SET_MOVIES";


function reducer(state, action) {
    switch (action.type) {
        case SET_MOVIES:
            return { state:{}, movies: action.movies };
        default :
            console.log("from default");
            break;
            
    }
}
const initialState = {
    movies: [],
    selectedGenre: -1,
};
export function MovieProvider(props) {

    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <MovieContext.Provider value={[state, dispatch]}>
            {props.children}
        </MovieContext.Provider>
    );
}
