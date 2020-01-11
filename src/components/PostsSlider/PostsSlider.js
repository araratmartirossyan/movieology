import React from "react";
import { Gallery } from "@vkontakte/vkui";

const PostCard = ({ title, poster }, key) => (
  <div>
    <div
      key={key}
      style={{
        backgroundImage: `url(https://movie.incodewetrust.dev${poster.url})`,
        borderRadius: 12,
        backgroundSize: "cover",
        height: "330px"
      }}
    />
    {title}
  </div>
);

const PostsSlider = ({ posts = [] }) => (
  <div activePanel="gallery">
    <Gallery slideWidth="80%" align="center" style={{ height: "100%" }}>
      {posts.map(PostCard)}
    </Gallery>
  </div>
);

export default PostsSlider;
