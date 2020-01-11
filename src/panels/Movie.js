import React from "react";
import Icon24ShareExternal from "@vkontakte/icons/dist/24/share_external";
import Icon16LikeOutline from "@vkontakte/icons/dist/16/like_outline";
import Icon24CommentOutline from "@vkontakte/icons/dist/24/comment_outline";
import Icon28FavoriteOutline from "@vkontakte/icons/dist/28/favorite_outline";

import "./Movie.css";

const MovieView = ({
  movie: { Title, Poster, Plot, Actors, Rated, Runtime, Genre, imdbRating }
}) => {
  return (
    <div className="wrap">
      <div className="cellphone-container">
        <div className="movie">
          <div
            className="movie-img"
            style={{
              backgroundImage: `url(${Poster})`,
              backgroundSize: "cover"
            }}
          ></div>
          <div className="text-movie-cont">
            <div className="mr-grid">
              <div className="col1">
                <h2>{Title}</h2>
                <ul className="movie-gen">
                  <li>{Rated} /</li>
                  <li>{Runtime} /</li>
                  <li>{Genre}</li>
                </ul>
              </div>
            </div>
            <div className="mr-grid summary-row">
              <div className="col2">
                <h5>SUMMARY</h5>
              </div>
              <div className="col2">
                <ul className="movie-likes">
                  <li>
                    <Icon28FavoriteOutline width={20} height={20} />
                    {imdbRating}
                  </li>
                </ul>
              </div>
            </div>
            <div className="mr-grid">
              <div className="col1">
                <p className="movie-description">{Plot}</p>
              </div>
            </div>
            <div className="mr-grid actors-row">
              <div className="col1">
                <p className="movie-actors">{Actors}</p>
              </div>
            </div>
            <div className="mr-grid action-row">
              <div className="col6 action-btn">
                <Icon24CommentOutline
                  width={30}
                  height={30}
                  style={{ color: "#fe4141" }}
                />
              </div>
              <div className="col6 action-btn">
                <Icon16LikeOutline
                  width={30}
                  height={30}
                  style={{ color: "#fe4141" }}
                />
              </div>
              <div className="col6 action-btn">
                <Icon24ShareExternal
                  width={30}
                  height={30}
                  style={{ color: "#fe4141" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieView;
