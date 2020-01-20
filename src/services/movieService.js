import { request } from "./../utils/request";
import { isEmpty, head, propOr } from "ramda";

export default class MovieService {
  async fetchMovies() {
    try {
      const data = await request("get", "movies", "api", {});
      return data;
    } catch (err) {
      throw err;
    }
  }

  async like(movieId) {
    try {
      const userId = localStorage.getItem("dbId");
      const like = await request("post", "favorites", "api", {
        profile: userId,
        movie: movieId
      });
      localStorage.setItem("favId", like._id);
      return like;
    } catch (err) {
      throw err;
    }
  }

  async unlike() {
    try {
      const favId = localStorage.getItem("favId");
      const like = await request("delete", `favorites/${favId}`, "api");
      return like;
    } catch (err) {
      throw err;
    }
  }

  async checkIsFav(movieId) {
    try {
      const userId = localStorage.getItem("dbId");
      const fav = await request(
        "get",
        `favorites?movie=${movieId}&profile=${userId}`,
        "api"
      );
      const id = propOr(null, "id")(head(fav));
      localStorage.setItem("favId", id);
      return !isEmpty(fav);
    } catch (err) {
      throw err;
    }
  }

  async fetchFavs(userId) {
    try {
      const favs = await request("get", `favorites?profile=${userId}`, "api");
      return favs;
    } catch (error) {
      throw error;
    }
  }
}