import connect from "@vkontakte/vk-connect";
connect.subscribe(e => console.log(e));

export default class VkService {
  onMovieShare(movieId) {
    console.log(movieId);
    connect.send("VKWebAppShare", {
      link: `https://vk.com/app7273858#movieId=${movieId}&view=movie`
    });
  }
}
