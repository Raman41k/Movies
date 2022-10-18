import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../../services";

const initialState = {
    movies: [],
    loading: false,
}

const getAllMovie = createAsyncThunk(
    'movieSlice/getAll',
    async (_,{rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll();
            return data.results;
        } catch (e){
            rejectWithValue(e.response.data)
        }
    }
)

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAllMovie.fulfilled,(state, action) =>{
                state.movies = action.payload;
                state.loading = false
            })
            .addCase(getAllMovie.pending,(state)=>{
                state.loading = true
            })
});

const {reducer: movieReducer, actions: {}} = movieSlice;

const movieActions = {
    getAllMovie
}

export {
    movieReducer,
    movieActions
}