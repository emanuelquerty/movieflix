import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import "./MovieDetails.css";
import MovieDetailsBanner from "../../components/MovieDetailsBanner/MovieDetailsBanner.jsx";
import SearchMoviesService from "../../services/SearchMoviesService";
import GenericCard from "../../components/GenericCard/GenericCard.jsx";

const MovieDetails = (props) => {
  // State variables
  let [movie, setMovie] = useState([]);
  let [movieCast, setmovieCast] = useState([]);

  // Get the movieId from pathname
  const { location } = props;
  let pathnameArray = location.pathname.split("/");
  let movieOrTv = pathnameArray[1];
  let movieId = pathnameArray[2].split("-")[0];

  // UseEffect for getting the movie banner info
  useEffect(() => {
    let searchMoviesService = new SearchMoviesService();
    searchMoviesService.getMovieById(movieId, movieOrTv).then((movieData) => {
      console.log(movieData);
      setMovie(movieData);
    });
  }, [movieId, movieOrTv]);

  // UseEffect for getting the full cast
  // UseEffect for getting the movie banner info
  useEffect(() => {
    let searchMoviesService = new SearchMoviesService();
    searchMoviesService.getFullCast(movieId, movieOrTv).then((data) => {
      setmovieCast(data.cast);
    });
  }, [movieId, movieOrTv]);

  return (
    <div className="movie-details">
      <MovieDetailsBanner movie={movie} />

      <div className="movie-details__cast">
        <h2 className="cast__title">Top Cast</h2>
        <div className="cast__list">
          {movieCast
            .filter((cast) => cast.profile_path)
            .map((cast, index) => {
              let { name, character, profile_path } = cast;
              return (
                <GenericCard
                  key={index}
                  title={name}
                  smallTextArray={[character]}
                  poster_path={profile_path}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default withRouter(MovieDetails);
