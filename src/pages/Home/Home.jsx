import React, { useState, useEffect } from "react";
import "./Home.css";
import HomePageBanner from "../../components/HomePageBanner/HomePageBanner.jsx";
import PopularMovies from "../../components/PopularMovies/PopularMovies.jsx";
import SmallSelectBar from "../../components/SmallSelectBar/SmallSelectBar.jsx";
import SearchMoviesService from "../../services/SearchMoviesService";

const Home = (props) => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [movieCategory, setMovieCategory] = useState("popular");

  useEffect(() => {
    const popular = new SearchMoviesService();
    popular.getAll(movieCategory).then((data) => {
      setPopularMovies(data.results);
    });
  }, [movieCategory]);

  return (
    <div className="homepage">
      <HomePageBanner />
      <main className="homepage__main">
        <h2 className="popular-header__popular-title">Popular right now</h2>
        <SmallSelectBar onSetMovieCategory={setMovieCategory} />
        {<PopularMovies popularMovies={popularMovies} />}
      </main>
    </div>
  );
};

export default Home;
