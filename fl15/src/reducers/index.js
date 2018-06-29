import { combineReducers } from "redux";
import { keys, selectedKey } from "./key";

import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  keys,
  selectedKey,
  routerReducer
});

export default rootReducer;
