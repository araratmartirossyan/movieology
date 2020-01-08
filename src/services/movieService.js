import { clientApi } from "../utils/request";

export default class MovieService {
  async fetchMovies() {
    try {
      const data = await clientApi("get", "/3/movie/550", "movies", {});
      console.log(data);
      // if (jwt) {
      //   return {
      //     success: true,
      //     token: jwt,
      //     profile: user
      //   };
      // }
      // const error = {
      //   error: true,
      //   message: "User and Password combination not found"
      // };
      // throw error;
    } catch (err) {
      throw err;
    }
  }
}
