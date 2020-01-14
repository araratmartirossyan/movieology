import { request } from "./../utils/request";
import { pick, isEmpty } from "ramda";
import connect from "@vkontakte/vk-connect";
connect.subscribe(() => {});

export default class BlogService {
  async getUserFromVk() {
    try {
      const userId = localStorage.getItem("userId");
      if (userId) {
        const profile = await this.getProfile(userId);
        this.fetchFavs(profile._id);
        return profile;
      }

      const user = await connect.sendPromise("VKWebAppGetUserInfo");
      const profile = await this.getProfile(user.id);
      if (profile) {
        localStorage.setItem("userId", user.id);
        this.fetchFavs(profile._id);
        return profile;
      }

      const createdUser = await request("post", "profiles", "api", {
        ...pick(["photo_max_orig", "first_name", "last_name"], user),
        userId: user.id
      });

      localStorage.setItem("dbId", createdUser._id);
      localStorage.setItem("user", JSON.stringify(createdUser));

      this.fetchFavs(createdUser._id);

      return createdUser;
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

      return like;
    } catch (err) {
      throw err;
    }
  }

  async unlike(movieId) {
    try {
      const userId = localStorage.getItem("dbId");
      const like = await request("delete", "favorites", "api", {
        profile: userId,
        movie: movieId
      });

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

  async getProfile(userId) {
    const [profile = null] = await request(
      "get",
      `profiles/?userId=${userId}`,
      "api"
    );
    localStorage.setItem("userId", userId);
    if (profile) {
      localStorage.setItem("dbId", profile._id);
      localStorage.setItem("user", JSON.stringify(profile));
      return profile;
    }
    return null;
  }
}
