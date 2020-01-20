import "core-js/features/map";
import "core-js/features/set";
import { getObjectUrlString } from "./utils/urlParams";
import React from "react";
import ReactDOM from "react-dom";
import connect from "@vkontakte/vk-connect";
import App from "./App";
// import registerServiceWorker from './sw';

connect.send("VKWebAppInit", {});

const props = getObjectUrlString();

ReactDOM.render(<App {...props} />, document.getElementById("root"));
