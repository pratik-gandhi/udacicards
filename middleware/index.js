import thunk from "redux-thunk";
import { applyMiddleware } from "redux";
import { loadingBarMiddleware } from "react-redux-loading"

import logger from "./logger";

export default applyMiddleware(loadingBarMiddleware(), thunk);
