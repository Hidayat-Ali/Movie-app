import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import {  fetchAsyncMovies, fetchAsyncShows } from "../../Features/movies/movieSlice";
import MovieListings from "../MovieListings/MovieListings";
const Home = () => {
 
  const dispatch = useDispatch();
  useEffect(() => {
 dispatch(fetchAsyncMovies())
 dispatch(fetchAsyncShows());
   
  }, []);

  return (
    <div>
      <MovieListings/>
    </div>
  );
};

export default Home;
