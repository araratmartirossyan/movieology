import { request } from "./../utils/request";

export default class MovieService {
  async fetchMovies() {
    try {
      const data = await request("get", "3/movie/top_rated", "movies", {});
      return data;
    } catch (err) {
      throw err;
    }
  }
}
