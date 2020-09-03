import React from "react";
import "./SearchMoviesResults.css";
import MovieCard from "../MovieCard/MovieCard.jsx";

// This component holds the list of movie results in the
// SearchMoviesModal
export default function SearchMoviesResults(props) {
  const movies = props.movies;
  return (
    <div className="card-list">
      {movies && movies.length !== 0
        ? movies
            .filter((movie) => movie.poster_path)
            .map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onCloseSearchMoviesModal={props.onCloseSearchMoviesModal}
              />
            ))
        : movies && (
            <h2 className="no-movie-entered-message">
              Enter a valid movie name
            </h2>
          )}
    </div>
  );
}
