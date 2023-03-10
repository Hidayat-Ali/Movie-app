import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../Features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";

const MovieListings = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);

  let renderMovies,
  renderShows = "";
  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => {
        return <MovieCard key={index} data={movie} />;
        // console.log(movie);
      })
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );

  renderShows =
    shows.Response === "True" ? (
      shows.Search?.map((movie, index) => {
        return <MovieCard key={index} data={movie} />;
        // console.log(movie);
      })
    ) : (
      <div className="shows-error">
        <h3>{shows.Error} error is here</h3>
      </div>
    );
  // console.log(renderShows);

  return (
  
    <div class="container">
    <h3 class="text-center">Movies</h3>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 ">{renderMovies}</div>
    
    <h3 class="text-center mt-4">Shows</h3>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 ">{renderShows}</div>
  </div>

  );
};

export default MovieListings;
