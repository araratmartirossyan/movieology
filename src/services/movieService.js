import { request } from "./../utils/request";

export default class MovieService {
  async fetchMovies() {
    try {
      const data = await request("get", "movies", "api", {});
      return data;
    } catch (err) {
      throw err;
    }
  }
}
