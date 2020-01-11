import React, { useState } from "react";
import PropTypes from "prop-types";
import { Panel, Header, Link } from "@vkontakte/vkui";
import MovieSlider from "../components/MovieSlider/MovieSlider";
import PostsSlider from "../components/PostsSlider/PostsSlider";

const Home = ({ movies, posts }) => (
  <Panel id="header" theme="white">
    <div className="block gray">
      <Header aside={<Link>Показать все</Link>}>ТОП-10</Header>
      {movies && <MovieSlider movies={movies} />}
    </div>
    <div className="block">
      <Header aside={<Link>Показать все</Link>}>Статьи</Header>
      {posts && <PostsSlider posts={posts} />}
    </div>
  </Panel>
);

Home.propTypes = {
  id: PropTypes.string.isRequired,
  movies: PropTypes.array,
  posts: PropTypes.array,
  fetchedUser: PropTypes.shape({
    photo_200: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    city: PropTypes.shape({
      title: PropTypes.string
    })
  })
};

export default Home;
