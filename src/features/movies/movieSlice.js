import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from '../../common/apis/movieApi';
import { APIKey } from '../../common/apis/MovieApiKey';

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async () => {

    const movieText = "Harry";
    const response = await movieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
        .catch((err) => {
            console.log("Err:", err);
        });
    // dispatch(addMovies(response.data))
    console.log("Movies Data", response.data.Search)
    return response.data;
});


const initialState = {
    movies: {},
}

const movieSlice = createSlice({

    name: "movies",
    initialState,
    reducers: {

        addMovies: (state, { payload }) => {
            state.movies = payload;
        },
    },

    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log("Pending")
        },
        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
            console.log("Payload")
            return { ...state, movies: payload }
        },

        [fetchAsyncMovies.rejected]: (state, { payload }) => {
            console.log("Rejected");

        }

    }

});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export default movieSlice.reducer;