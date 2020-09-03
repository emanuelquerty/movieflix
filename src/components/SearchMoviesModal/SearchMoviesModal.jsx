import React, { useState } from "react";
import "./SearchMoviesModal.css";
import SearchMoviesResults from "../SearchMoviesResults/SearchMoviesResults.jsx";
import SearchMoviesForm from "../SearchMoviesForm/SearchMoviesForm.jsx";

// This is the modal that pops up when the user clicks the search icon
const SearchMoviesModal = (props) => {
  const [movies, setMovies] = useState(null);
  let computedClass = "search-movies-modal";

  props.show
    ? (computedClass += " search-movies-modal--show")
    : (computedClass += " search-movies-modal--hide");

  return (
    <div className={computedClass}>
      <SearchMoviesForm onSetMovies={setMovies} />
      <SearchMoviesResults
        movies={movies}
        onCloseSearchMoviesModal={() => props.onCloseSearchMoviesModal(false)}
      />
    </div>
  );
};

export default SearchMoviesModal;
