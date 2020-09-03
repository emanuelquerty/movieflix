import React from "react";
import { withRouter } from "react-router-dom";
import "./MovieCard.css";

// This Movie Card is used on the SearchMoviesModal Component
// that opens when user presses the search icon
function MovieCard(props) {
  const { movie, history } = props;

  // Called when user clicks a movie card
  function showMovieDetailsPage() {
    history.push(`/movie/${movie.id}-${movie.title.replace(" ", "-")}`);
  }

  return (
    <div
      className="card"
      onClick={() => {
        showMovieDetailsPage();
        props.onCloseSearchMoviesModal();
      }}
    >
      <img
        className="card__image"
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title + "poster"}
        loading="lazy"
      />
      <div className="card__content">
        <h3 className="content__title">{movie.title}</h3>
        <p className="content__small">
          <small>Release Date: {movie.release_date}</small>
        </p>
        <p className="content__small">
          <small>Rating: {movie.vote_average}</small>
        </p>
        <p className="content__description">{`${movie.overview.substring(
          0,
          100
        )}...`}</p>
      </div>
    </div>
  );
}

export default withRouter(MovieCard);
