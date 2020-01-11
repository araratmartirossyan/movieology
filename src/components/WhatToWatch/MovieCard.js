import React, { useState } from "react";

const MovieCard = ({ movie: { title, poster_path } }) => (
  <div>
    <div
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
        borderRadius: 12,
        backgroundSize: "cover",
        height: "230px"
      }}
    />
    {title}
  </div>
);

export default MovieCard;
