import { pick } from "ramda";
import connect from "@vkontakte/vk-connect";
import { request } from "./../utils/request";
import { setKeyAsync } from "./../utils/storageUtils";

export default class BlogService {
  async getUserFromVk() {
    try {
      const user = await connect.sendPromise("VKWebAppGetUserInfo");
      const profile = await this.getProfile(user.id);
      if (profile) {
        return profile;
      }

      const createdUser = await request("post", "profiles", "api", {
        ...pick(["photo_max_orig", "first_name", "last_name"], user),
        userId: String(user.id)
      });
      setKeyAsync("userId", createdUser.id);

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
    if (profile) {
      setKeyAsync("userId", profile.id);
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
