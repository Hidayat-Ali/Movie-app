import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import MovieApi from "../../Common/Apis/MovieApi";
import { API_KEY } from "../../Common/Apis/MovieApiKey";
 const initialState = {
    movies:{},
    shows:{},
};


export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies',
async() => {
    const MovieText = "Harry";
    const response = await MovieApi
    .get(`?apiKey=${API_KEY}&s=${MovieText}&type=movie` )
   
    
   return response.data
  }

)

export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows',async()=>{
    const ShowText = "Friends";
    const response = await MovieApi
    .get(`?apiKey=${API_KEY}&s=${ShowText}&type=series`)
    return response.data;
})
const movieSlice = createSlice({
    name:'movies',
    initialState,
    reducers:{
        addMovies: (state, {payload})=>{
            state.movies = payload;
        } 
    },
    extraReducers:{
        [fetchAsyncMovies.pending]:()=>{
            console.log('pending')
        },
        [fetchAsyncMovies.fulfilled]:(state,{payload})=>{
            console.log("fetched succesfully");
            return{...state,movies:payload}
        },
        [fetchAsyncMovies.rejected]:()=>{
            console.log('rejected');
        },
        [fetchAsyncShows.fulfilled]:(state,{payload})=>{
            console.log('Fetched successfully');
            return {...state , shows:payload}
        }
    }
});

export const {addMovies} = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export default movieSlice.reducer;