import React from "react";
import { withRouter } from "react-router-dom";
import "./SmallMovieCard.css";

// This card is used in the Home Component for
// holding a movie
const SmallMovieCard = (props) => {
  const { movie, history } = props;

  function showMovieDetailsPage() {
    let movieOrTvShow = movie.title ? "movie" : "tv";
    let titleOrname = movie.title || movie.name;
    console.log(titleOrname);

    const regex = / /gi; // regex for matching all instances of single spaces
    history.push(
      `/${movieOrTvShow}/${movie.id}-${titleOrname.replace(regex, "-")}`
    );
  }

  console.log(movie);

  return (
    <div className="small-card" onClick={showMovieDetailsPage}>
      <img
        className="small-card__image"
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title + "poster"}
      />
      <div className="small-card__content">
        <h3 className="small-card__title">{movie.title || movie.name}</h3>
        <p className="small-card__release-date">
          <small>
            {movie.release_date
              ? "Release Date: " + movie.release_date
              : "First Air Date: " + movie.first_air_date}
          </small>
        </p>
        <p className="small-card__rating">
          <small>Rating: {movie.vote_average}</small>
        </p>
      </div>
    </div>
  );
};

export default withRouter(SmallMovieCard);
