import { request } from "./../utils/request";

export default class MovieService {
  async fetchMovies() {
    try {
      const data = await request("get", "?i=tt3896198", "omdb", {});
      return data;
    } catch (err) {
      throw err;
    }
  }
}
