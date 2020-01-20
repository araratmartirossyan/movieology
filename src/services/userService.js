import { request } from "./../utils/request";
import { pick } from "ramda";
import connect from "@vkontakte/vk-connect";
connect.subscribe(e => console.log(e, "STATER"));

export default class BlogService {
  async getUserFromVk() {
    try {
      const userId = localStorage.getItem("userId");
      if (userId) {
        const profile = await this.getProfile(userId);
        return profile;
      }

      const user = await connect.sendPromise("VKWebAppGetUserInfo");
      const profile = await this.getProfile(user.id);
      if (profile) {
        localStorage.setItem("userId", user.id);
        return profile;
      }

      const createdUser = await request("post", "profiles", "api", {
        ...pick(["photo_max_orig", "first_name", "last_name"], user),
        userId: user.id
      });

      localStorage.setItem("dbId", createdUser._id);
      localStorage.setItem("user", JSON.stringify(createdUser));

      return createdUser;
    } catch (err) {
      throw err;
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

  showImage(url) {
    connect.send("VKWebAppShowImages", {
      images: [url]
    });
  }
}
