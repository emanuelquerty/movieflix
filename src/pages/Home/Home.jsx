import React, { useState, useEffect } from "react";
import "./Home.css";
import HomePageBanner from "../../components/HomePageBanner/HomePageBanner.jsx";
import Popular from "../../components/Popular/Popular.jsx";
import SmallSelectBar from "../../components/SmallSelectBar/SmallSelectBar.jsx";
import SearchMoviesService from "../../services/SearchMoviesService";

const Home = (props) => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [movieCategory, setMovieCategory] = useState("popular");
  const [popularTvShows, setPopularTvShows] = useState([]);
  const [tvShowCategory, setTvShowCategory] = useState("popular");

  // UseEffect for getting the list of popular movies
  useEffect(() => {
    const popular = new SearchMoviesService();
    popular.getAll(movieCategory, "movie").then((data) => {
      setPopularMovies(data.results);
    });
  }, [movieCategory]);

  // UseEffect for getting the list of popular tv shows
  useEffect(() => {
    const popular = new SearchMoviesService();
    popular.getAll(tvShowCategory, "tv").then((data) => {
      if (data.hasOwnProperty("results")) {
        setPopularTvShows(data.results);
      } else {
        setPopularTvShows([data]);
      }
    });
  }, [tvShowCategory]);

  let movieOptionsLabel = ["For Rent", "In Theathers", "Top Rated"];
  let movieCategories = ["popular", "now_playing", "top_rated"];

  let tvShowsOptionsLabel = ["For Rent", "Latest", "Top Rated"];
  let tvShowsCategories = ["popular", "latest", "top_rated"];

  return (
    <div className="homepage">
      <HomePageBanner />
      <main className="homepage__main">
        {/* Popular Movies Right Now */}
        <h2 className="popular-header__popular-title">
          Popular movies right now
        </h2>
        <SmallSelectBar
          onSetCategory={setMovieCategory}
          optionsLabel={movieOptionsLabel}
          categories={movieCategories}
        />
        {<Popular popular={popularMovies} />}

        {/* Popular TV Shows Right Now */}
        <h2 className="popular-header__popular-title">
          Popular tv shows right now
        </h2>
        <SmallSelectBar
          onSetCategory={setTvShowCategory}
          optionsLabel={tvShowsOptionsLabel}
          categories={tvShowsCategories}
        />
        {<Popular popular={popularTvShows} />}
      </main>
    </div>
  );
};

export default Home;
