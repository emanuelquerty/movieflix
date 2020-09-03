import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./NavBar.css";
import Search from "@material-ui/icons/Search";

const NavBar = (props) => {
  function openSearchMoviesModal() {
    props.onOpenSearchMoviesModal();
  }

  return (
    <nav className="navbar">
      <Link to="/" className="navbar__link app-title" id="app-title">
        MOVIEFLIX
      </Link>
      <Link to="/" className="navbar__link home">
        Home
      </Link>
      {/* TO BE DONE SOON */}
      {/* <Link to="/movies" className="navbar__link">
        Movies
      </Link>
      <Link to="/tv-shows" className="navbar__link">
        TV Shows
      </Link> */}
      <Link
        to={props.location.pathname}
        className="navbar__link"
        onClick={openSearchMoviesModal}
      >
        <Search className="navbar__search-icon" />
      </Link>
    </nav>
  );
};

export default withRouter(NavBar);
