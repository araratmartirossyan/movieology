import axios from "axios";

const urls = {
  movies: "https://api.themoviedb.org",
  api: ""
};

export const request = async (method, url, endpoint, params = {}) => {
  try {
    const { data } = await axios({
      url: `${urls[endpoint]}/${url}?api_key=ca7b0635ffccf1dfb0cd5e2673609810`,
      method,
      data: params,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    });
    return data;
  } catch (err) {
    return err;
  }
};
