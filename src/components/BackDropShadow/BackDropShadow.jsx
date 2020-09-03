import React from "react";
import "./BackDropShadow.css";

const BackDropShadow = (props) => {
  let computedClass = "backdrop-shadow";

  props.show
    ? (computedClass += " backdrop-shadow--show")
    : (computedClass += " backdrop-shadow--hide");

  return (
    <div
      className={computedClass}
      onClick={() => props.onCloseSearchMoviesModal()}
    >
      Here
    </div>
  );
};

export default BackDropShadow;
