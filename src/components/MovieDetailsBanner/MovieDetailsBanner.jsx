import React from "react";
import "./MovieDetailsBanner.css";

// This is component is used in the MovieDetails Page to
// display the big movie banner
const MovieDetailsBanner = (props) => {
  let { movie } = props;

  let { poster_path, production_countries, overview, tagline } = movie;

  // Given a runtime number in minutes,
  // returns the pretty equivalent in hours and minutes
  function getPrettyRuntime(time) {
    let hours = Math.floor(time / 60);
    let minutes = time % 60;

    return `${hours}h ${minutes}m`;
  }

  return (
    <div className="movie-details-banner">
      <img
        className="movie-details-banner__image"
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={movie.title || movie.name + "poster"}
      />
      <div className="movie-details-banner__content">
        <h2 className="movie-details-banner__title">
          {movie.title || movie.name}
        </h2>
        <p className="movie-details-banner__release-date">
          {movie.release_date || movie.first_air_date}

          {production_countries && production_countries[0]
            ? ` (${production_countries[0].iso_3166_1})`
            : ` ${movie.origin_country}`}

          {movie.runtime
            ? ` . ${getPrettyRuntime(movie.runtime)}`
            : movie.seasons && ` . ${movie.seasons.length} seasons`}
        </p>
        <p className="movie-details-banner__tagline">{tagline}</p>
        <h2 className="movie-details-banner__overview-title">Overview</h2>
        <p className="movie-details-banner__overview">{overview}</p>
      </div>
    </div>
  );
};

export default MovieDetailsBanner;
