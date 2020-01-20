import React, { useState, useEffect } from "react";
import { View, Root, Panel } from "@vkontakte/vkui";
import {
  prefetchData,
  handleLike,
  fetchMovies,
  checkIsFav,
  showImage,
  handleUnLike,
  onMovieShare
} from "./utils/prefetchData";
import Welcome from "./panels/Welcome";
import MovieCard from "./panels/Movie";

import "@vkontakte/vkui/dist/vkui.css";
import "./styles/global.css";

const App = ({ view, movieId = null }) => {
  const [activeView, setActiveView] = useState(view);
  const [vkUser, setUser] = useState(null);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const prefetch = async () => {
      const { user } = await prefetchData();
      setUser(user);
    };
    prefetch();
  }, []);

  const handleFindMovie = async () => {
    const movies = await fetchMovies();
    const randomMovieId = Math.floor(Math.random() * movies.length);
    const randomMovie = movies[randomMovieId];
    const isFavorite = await checkIsFav(randomMovie._id);
    setMovie({
      ...randomMovie,
      isFavorite
    });
    setTimeout(() => {
      setActiveView("movie");
    }, 3000);
  };

  const likeHandler = async (movieId = null) => {
    if (movieId) {
      await handleLike(movieId);
    } else {
      await handleUnLike();
    }
    setMovie({
      ...movie,
      isFavorite: movieId ? true : false
    });
  };

  return (
    <Root activeView={activeView}>
      <View header={false} activePanel="welcome_panel" id="welcome">
        <Panel id="welcome_panel">
          <Welcome onFindMovie={handleFindMovie} />
        </Panel>
      </View>
      <View header={false} activePanel="movie_panel" id="movie">
        <Panel id="movie_panel" style={{ backgroundColor: "#1e1b26" }}>
          {movie && (
            <MovieCard
              movie={movie}
              goBack={() => setActiveView("welcome")}
              showImage={showImage}
              onLike={likeHandler}
              onUnLike={likeHandler}
              onMovieShare={onMovieShare}
            />
          )}
        </Panel>
      </View>
    </Root>
  );
};

export default App;

// <Home id="home" fetchedUser={fetchedUser} movies={movies} posts={posts} />
