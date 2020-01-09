import React from "react";
import PropTypes from "prop-types";
import { Panel, Header, Link } from "@vkontakte/vkui";
import MovieSlider from "../components/MovieSlider";

const Home = ({ id, movies }) => (
  <Panel id="header" theme="white">
    <Header aside={<Link>Показать все</Link>}>ТОП-10</Header>
    {movies && <MovieSlider movies={movies} />}
  </Panel>
);

Home.propTypes = {
  id: PropTypes.string.isRequired,
  movies: PropTypes.array,
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
