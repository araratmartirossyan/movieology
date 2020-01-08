import React, { useState, useEffect } from "react";
import connect from "@vkontakte/vk-connect";
import View from "@vkontakte/vkui/dist/components/View/View";
import ScreenSpinner from "@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner";
import "@vkontakte/vkui/dist/vkui.css";

import Home from "./panels/Home";

// Api Calls
import MovieService from "./services/movieService";

const movieService = new MovieService();

const Spinner = <ScreenSpinner size="large" />;

const App = () => {
  const [activePanel] = useState("home");
  const [fetchedUser, setUser] = useState(null);
  const [popout, setPopout] = useState(Spinner);

  useEffect(() => {
    connect.subscribe(() => {});
    async function fetchData() {
      const user = await connect.sendPromise("VKWebAppGetUserInfo");
      setUser(user);
      setPopout(null);
    }
    fetchData();
  }, []);

  return (
    <View activePanel={activePanel} popout={popout}>
      <Home id="home" fetchedUser={fetchedUser} />
    </View>
  );
};

export default App;
