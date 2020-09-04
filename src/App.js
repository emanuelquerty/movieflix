import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home.jsx";
import MovieDetails from "./pages/MovieDetails/MovieDetails.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import SearchMoviesModal from "./components/SearchMoviesModal/SearchMoviesModal.jsx";
import BackDropShadow from "./components/BackDropShadow/BackDropShadow.jsx";

function App() {
  const [searchMoviesModalIsOpen, setSearchMoviesModalIsOpen] = useState(false);

  return (
    <div className="app">
      <NavBar
        onOpenSearchMoviesModal={() => setSearchMoviesModalIsOpen(true)}
      />
      <main>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
        </Switch>
        <Switch>
          <Route exact path="/movie/:id" render={() => <MovieDetails />} />
        </Switch>
        <Switch>
          <Route exact path="/tv/:id" render={() => <MovieDetails />} />
        </Switch>
      </main>
      <SearchMoviesModal
        show={searchMoviesModalIsOpen}
        onCloseSearchMoviesModal={() => setSearchMoviesModalIsOpen(false)}
      />
      <BackDropShadow
        show={searchMoviesModalIsOpen}
        onCloseSearchMoviesModal={() => setSearchMoviesModalIsOpen(false)}
      />
    </div>
  );
}

export default App;
