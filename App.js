import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import reducers from "./reducers/index";
import middlewares from "./middleware/index";

import { saveState } from "./api/api";

import { setLocalNotification } from "./utils/helpers";
import MainLayout from "./components/layouts/MainLayout";

const store = createStore(reducers, middlewares);

store.subscribe(() => saveState(store.getState()));

export default class App extends React.Component {

  componentDidMount() {
    setLocalNotification()
  }

  render() {
    return (
      <Provider store={store}>
        <MainLayout />
      </Provider>
    )
  }
}
