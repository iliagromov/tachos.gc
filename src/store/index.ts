import { combineReducers, applyMiddleware } from "redux";
import { legacy_createStore as createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import reduxThunk from "redux-thunk";
// applyMiddleware } from "redux";

import * as user from "./User";

const rootReducer = combineReducers({
  user: user.default,
});

export default function configureStore() {
  //   const middlewares = [reduxThunk];

  //   const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
    rootReducer
    // composeWithDevTools(middleWareEnhancer)
  );

  return store;
}

export type AppState = ReturnType<typeof rootReducer>;
export type Store = ReturnType<typeof configureStore>;

export { user };
