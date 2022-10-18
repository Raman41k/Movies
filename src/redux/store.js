import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";

import {movieReducer} from "./slices/movie.slice/movie.slice";

const rootReducer = combineReducers({
    movieReducer
});

const setUpStore = () => configureStore({
    reducer: rootReducer
})

export {
    setUpStore
}