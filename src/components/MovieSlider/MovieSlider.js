import React from "react";
import { Gallery } from "@vkontakte/vkui";
import Raiting from "./../Raiting/Raiting";
import "./MovieSlider.css";

const MovieCard = ({ title, poster_path, vote_average }, key) => (
  <div>
    <div
      key={key}
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
        borderRadius: 12,
        backgroundSize: "cover",
        height: "230px"
      }}
    />
    {title}
    <Raiting rate={vote_average} key={key} />
  </div>
);

const MovieSlider = ({ movies = [] }) => (
  <div activePanel="gallery">
    <Gallery slideWidth="60%" align="center" style={{ height: "100%" }}>
      {movies.map(MovieCard)}
    </Gallery>
  </div>
);

export default MovieSlider;
