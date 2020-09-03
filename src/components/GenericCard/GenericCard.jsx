import React from "react";
import "./GenericCard.css";

// This Card is used on the MovieDetails component
// for holding the movie cast
const GenericCard = (props) => {
  const { title, smallTextArray, poster_path } = props;

  return (
    <div className="generic-card">
      <img
        className="generic-card__image"
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={title + " poster"}
      />
      <div className="generic-card__content">
        <h3 className="generic-card__title">{title}</h3>
        {smallTextArray.map((text, index) => {
          return (
            <p key={index} className="generic-card__small-text">
              <small>{text}</small>
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default GenericCard;
