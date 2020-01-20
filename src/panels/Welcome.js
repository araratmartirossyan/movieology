import React from "react";
import WhatToWatch from "./../components/WhatToWatch/WhatToWatch";
import "./Welcome.css";

const WelcomePanel = ({ onFindMovie, loaded }) => (
  <div className="welcome_panel">
    <WhatToWatch onFindMovie={onFindMovie} loaded={loaded} />
  </div>
);

export default WelcomePanel;
