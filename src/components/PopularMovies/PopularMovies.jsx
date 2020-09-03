import React from "react";
import "./PopularMovies.css";
import SmallMovieCard from "../SmallMovieCard/SmallMovieCard.jsx";

// This component is used in the Home Component for holding the list
// of popular movies, wether that is "For Rent", "In Theathers", etc.
const PopularMovies = ({ popularMovies }) => {
  return (
    <div className="popular-movies">
      {popularMovies
        .filter((movie) => movie.poster_path)
        .map((movie) => {
          return <SmallMovieCard key={movie.id} movie={movie} />;
        })}
    </div>
  );
};

export default PopularMovies;
