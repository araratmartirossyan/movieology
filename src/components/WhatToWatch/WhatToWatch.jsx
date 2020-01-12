import React, { useState } from "react";
import cx from "classnames";
import "./WhatToWatch.css";

const WhatToWatchButton = ({ onFindMovie, moving }) => {
  const [state, setState] = useState({
    processing: false
  });

  const animate = () => {
    setState({
      processing: true
    });
    onFindMovie();
  };

  return (
    <div className="movie-block">
      <div className="movie-button">
        <button
          className={cx({
            button: true,
            processing: state.processing,
            "element-move-top": moving
          })}
          onClick={animate}
        >
          <span>Что глянуть?</span>
          <svg viewBox="0 0 15 13">
            <polyline points="2 6.5 6 10.5 13 2.5"></polyline>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default WhatToWatchButton;
