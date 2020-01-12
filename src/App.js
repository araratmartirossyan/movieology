import React, { useState, useEffect } from "react";
import connect from "@vkontakte/vk-connect";
import { View, Root, Panel } from "@vkontakte/vkui";
import Icon28ChevronBack from "@vkontakte/icons/dist/28/chevron_back";
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
  const movies = await movieService.fetchMovies();
  const posts = await blogService.fetchPosts();

  // const user = await connect.sendPromise("VKWebAppGetUserInfo");
  return {
    movies,
    // user,
    posts
  };
};

const App = () => {
  const [activeView, setActiveView] = useState("welcome");
  // const [history, setHistory] = useState(["welcome"]);
  // const [fetchedUser, setUser] = useState(null);
  const [movie, setMovie] = useState(null);
  const [posts, setPosts] = useState(null);

  // const goBack = () => {
  //   const history = [...this.state.history];
  //   history.pop();
  //   const activePanel = history[history.length - 1];
  //   if (activePanel === "main") {
  //     vkConnect.send("VKWebAppDisableSwipeBack");
  //   }
  //   setHistory(history);
  //   setActiveView(activePanel);
  // };

  // const goForward = activePanel => {
  //   const history = [...this.state.history];
  //   history.push(activePanel);
  //   if (this.state.activePanel === "main") {
  //     vkConnect.send("VKWebAppEnableSwipeBack");
  //   }
  //   setHistory(history);
  //   setActiveView(activePanel);
  // };

  // useEffect(() => {
  //   const prefetch = async () => {
  //     const { posts } = await prefetchData();
  //     setPosts(posts);
  //   };
  //   prefetch();
  // }, []);

  const handleFindMovie = async () => {
    const { movies } = await prefetchData();
    const randomMovie = Math.floor(Math.random() * movies.length);
    setMovie(movies[randomMovie]);
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
        <Panel id="movie_panel" style={{ backgroundColor: "#1e1b26" }}>
          <div className="back-btn">
            <Icon28ChevronBack onClick={() => setActiveView("welcome")} />
          </div>
          {movie && <MovieCard movie={movie} />}
        </Panel>
      </View>
    </Root>
  );
};

export default App;

// <Home id="home" fetchedUser={fetchedUser} movies={movies} posts={posts} />
