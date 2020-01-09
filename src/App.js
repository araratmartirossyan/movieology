import React, { useState, useEffect } from "react";
import connect from "@vkontakte/vk-connect";
import { View } from "@vkontakte/vkui";
import Home from "./panels/Home";

import "@vkontakte/vkui/dist/vkui.css";
import "./styles/global.css";

// Api Calls
import MovieService from "./services/movieService";
import BlogService from "./services/postService";

const prefetchData = async () => {
  connect.subscribe(() => {});
  const movieService = new MovieService();
  const blogService = new BlogService();
  const { results } = await movieService.fetchMovies();
  const posts = await blogService.fetchPosts();
  const user = await connect.sendPromise("VKWebAppGetUserInfo");
  return {
    movies: results,
    user,
    posts
  };
};

const App = () => {
  const [activePanel] = useState("home");
  const [fetchedUser, setUser] = useState(null);
  const [movies, setMovies] = useState(null);
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const prefetch = async () => {
      const { movies, user, posts } = await prefetchData();
      setUser(user);
      setMovies(movies);
      setPosts(posts);
    };
    prefetch();
  }, []);
  return (
    <View activePanel={activePanel}>
      <Home id="home" fetchedUser={fetchedUser} movies={movies} posts={posts} />
    </View>
  );
};

export default App;
