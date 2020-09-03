import React, { useState } from "react";
import "./SmallSelectBar.css";

const SmallSelectBar = (props) => {
  // This state is for enabling background color
  // on the currently selected option (true). All other
  // options get their background disabled (false)
  const [options, setOptions] = useState([true, false, false]);

  // This method return a list of nav options with the current
  // selected state based on options state
  function getOptions() {
    let className = "select-category__option ";
    let optionsLabel = ["For Rent", "In Theathers", "Top Rated"];
    let movieCategories = ["popular", "now_playing", "top_rated"];

    return options.map((activeState, index) => {
      return (
        <span
          key={index}
          className={
            activeState // active state tells which option to enable and which to disable
              ? (className += "select-category__option--active")
              : (className = "select-category__option ")
          }
          onClick={() => {
            let newOptions = [false, false, false];

            // Update the options state
            newOptions[index] = true;
            setOptions(newOptions);

            // Change the movie caregory to display, i.e popular, now_playing, etc;
            // This trigger fetching of moves from this new category in Home.js component
            props.onSetMovieCategory(movieCategories[index]);
          }}
        >
          {/* Now we display each option, i.e For Rent, In Theathers, etc */}
          {optionsLabel[index]}
        </span>
      );
    });
  }

  return <nav className="popular-header__select-category">{getOptions()}</nav>;
};

export default SmallSelectBar;
