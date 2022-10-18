import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../../services";

const initialState = {
    movies: [],
    loading: false,
}

const getAllMovie = createAsyncThunk(
    'movieSlice/getAllMovie',
    async (_,{rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll();
            return data.results;
        } catch (e){
            rejectWithValue(e.response.data)
        }
    }
);

const searchMovie = createAsyncThunk(
    'movieSlice/searchMovie',
    async (arg,{rejectWithValue}) => {
        try {
            const {data} = await movieService.searchMovie(arg);
            return data;
        } catch (e){
            rejectWithValue(e.response.data)
        }
    }
);

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {

    },
    extraReducers: builder =>
        builder
            .addCase(getAllMovie.fulfilled,(state, action) =>{
                state.movies = action.payload;
                state.loading = false
            })
            .addCase(getAllMovie.pending,(state)=>{
                state.loading = true
            })
            .addCase(searchMovie.fulfilled,(state, action) =>{
                state.movies = action.payload?.results;
                state.loading = false
            })
            .addCase(searchMovie.pending,(state)=>{
                state.loading = true
            })
});

const {reducer: movieReducer, actions: {}} = movieSlice;

const movieActions = {
    getAllMovie,
    searchMovie
}

export {
    movieReducer,
    movieActions
}