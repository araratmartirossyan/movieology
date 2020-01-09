import React from "react";
import { Gallery } from "@vkontakte/vkui";
import "./MovieSlider.css";

const MovieCard = ({ title, poster_path, vote_average }, key) => (
  <div>
    <div
      key={key}
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
        borderRadius: 12,
        backgroundSize: "cover",
        height: "330px"
      }}
    />
    {title}
    {vote_average}
  </div>
);

const MovieSlider = ({ movies = [] }) => (
  <div activePanel="gallery">
    <Gallery slideWidth="80%" align="center" style={{ height: "100%" }}>
      {movies.map(MovieCard)}
    </Gallery>
  </div>
);

export default MovieSlider;
