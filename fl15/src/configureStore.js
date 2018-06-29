import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "./reducers";

import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'

const loggerMiddleware = createLogger();
const history = createHistory();

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(routerMiddleware(history), thunkMiddleware, loggerMiddleware)
  );
}
