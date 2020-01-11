import React from "react";
import WhatToWatch from "./../components/WhatToWatch/WhatToWatch";
import "./styles.css";

const WelcomePanel = ({ onFindMovie, movie }) => (
  <div className="welcome_panel">
    <WhatToWatch onFindMovie={onFindMovie} movie={movie} />
  </div>
);

export default WelcomePanel;
