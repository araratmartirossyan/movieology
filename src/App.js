import React, { useState, useEffect } from "react";
import connect from "@vkontakte/vk-connect";
import { View, Root, Panel } from "@vkontakte/vkui";
import Welcome from "./panels/Welcome";
import MovieCard from "./panels/Movie";

import "@vkontakte/vkui/dist/vkui.css";
import "./styles/global.css";

// Api Calls
import MovieService from "./services/movieService";
import BlogService from "./services/postService";

const prefetchData = async () => {
  connect.subscribe(() => {});
  const movieService = new MovieService();
  const blogService = new BlogService();
  const movie = await movieService.fetchMovies();
  const posts = await blogService.fetchPosts();

  const user = await connect.sendPromise("VKWebAppGetUserInfo");
  return {
    movie: movie,
    user,
    posts
  };
};

const App = () => {
  const [activeView, setActiveView] = useState("welcome");
  const [fetchedUser, setUser] = useState(null);
  const [movie, setMovie] = useState(null);
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const prefetch = async () => {
      const { movie, user, posts } = await prefetchData();
      setUser(user);
      setMovie(movie);
      setPosts(posts);
    };
    prefetch();
  }, []);

  const handleFindMovie = () => {
    setTimeout(() => {
      setActiveView("movie");
    }, 3000);
  };

  return (
    <Root activeView={activeView}>
      <View header={false} activePanel="welcome_panel" id="welcome">
        <Panel id="welcome_panel">
          <Welcome onFindMovie={handleFindMovie} />
        </Panel>
      </View>
      <View header={false} activePanel="movie_panel" id="movie">
        <Panel id="movie_panel">
          <MovieCard movie={movie} />
        </Panel>
      </View>
    </Root>
  );
};

export default App;

// <Home id="home" fetchedUser={fetchedUser} movies={movies} posts={posts} />
