import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../../services";

const initialState = {
    movies: [],
    genres: [],
    loading: false,
    page: 1
}

const getAllMovie = createAsyncThunk(
    'movieSlice/getAllMovie',
    async (page, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll(page);
            return data.results;
        } catch (e) {
            rejectWithValue(e.response.data)
        }
    }
);

const searchMovie = createAsyncThunk(
    'movieSlice/searchMovie',
    async (arg, {rejectWithValue}) => {
        try {
            const {data} = await movieService.searchMovie(arg);
            return data;
        } catch (e) {
            rejectWithValue(e.response.data)
        }
    }
);

const getAllGenres = createAsyncThunk(
    'movieSlice/getAllGenres',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getGenres();
            return data;
        } catch (e) {
            rejectWithValue(e.response.data)
        }
    }
);

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        nextPage: (state, action) => {
            if (state.page < 500) state.page += action.payload;
        },
        prevPage: (state, action) => {
            if (state.page > 1) state.page -= action.payload;
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAllMovie.fulfilled, (state, action) => {
                state.movies = action.payload;
                state.loading = false
            })
            .addCase(getAllMovie.pending, (state) => {
                state.loading = true
            })
            .addCase(searchMovie.fulfilled, (state, action) => {
                state.movies = action.payload?.results;
                state.loading = false
            })
            .addCase(searchMovie.pending, (state) => {
                state.loading = true
            })
            .addCase(getAllGenres.fulfilled, (state, action) => {
                state.genres = action.payload;
            })

});

const {reducer: movieReducer, actions: {nextPage, prevPage}} = movieSlice;

const movieActions = {
    getAllMovie,
    searchMovie,
    getAllGenres,
    nextPage,
    prevPage
}

export {
    movieReducer,
    movieActions
}