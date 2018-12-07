import { createStore, combineReducers } from "redux";

import Exchange from "./Exchange";

const AppState = combineReducers({
  Exchange
});

const Root = (state, action) => {
  return AppState(state, action);
};

const store = createStore(Root);

export default store;
