import React from "react";
import "./Popular.css";
import SmallMovieCard from "../SmallMovieCard/SmallMovieCard.jsx";

// This component is used in the Home Component for holding the list
// of popular movies, wether that is "For Rent", "In Theathers", etc.
const Popular = ({ popular }) => {
  return (
    <div className="popular">
      {popular
        .filter((movie) => movie.poster_path)
        .map((movie) => {
          return <SmallMovieCard key={movie.id} movie={movie} />;
        })}
    </div>
  );
};

export default Popular;
