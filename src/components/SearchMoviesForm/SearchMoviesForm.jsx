import React, { useState } from "react";
import "./SearchMoviesForm.css";
import SearchMoviesService from "../../services/SearchMoviesService";

// This is the form component in the SearchMoviesModal
export default function SearchMovies(props) {
  // states - input queries, movies
  const [query, setQuery] = useState("");

  // Called when user presses the search button
  function getMovies(event) {
    const searchMoviesService = new SearchMoviesService();

    if (!query) {
      event.preventDefault();
      props.onSetMovies([]);
    } else {
      searchMoviesService.getMoviesFromQuery(event, query).then((data) => {
        console.log(data);
        props.onSetMovies(data.results);
      });
    }
  }

  return (
    <form className="form" onSubmit={getMovies}>
      <input
        type="text"
        name="query"
        placeholder="i.e jurassic park"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
      <button type="submit" className="button">
        Search
      </button>
    </form>
  );
}
