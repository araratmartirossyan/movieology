// Api Calls
import MovieService from "../services/movieService";
import UserService from "../services/userService";

const movieService = new MovieService();
const userService = new UserService();

export const prefetchData = async () => {
  const user = await userService.getUserFromVk();

  return {
    user
  };
};

export const fetchMovies = async () => {
  try {
    const movies = await movieService.fetchMovies();
    return movies;
  } catch (err) {
    throw err;
  }
};

export const handleLike = async movieId => {
  try {
    const like = await userService.like(movieId);
    return like;
  } catch (error) {
    throw error;
  }
};

export const checkIsFav = async movieId => {
  try {
    const isFav = await userService.checkIsFav(movieId);
    return isFav;
  } catch (error) {
    throw error;
  }
};
