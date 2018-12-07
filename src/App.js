import React from "react";
import { Provider } from "react-redux";
import { StatusBar } from "react-native";
import store from "./Reducers/index";
import Navigation from "./Navigation";

const App = () => (
  <Provider store={store}>
    <StatusBar backgroundColor="#283593" barStyle="light-content" />
    <Navigation />
  </Provider>
);

export default App;
