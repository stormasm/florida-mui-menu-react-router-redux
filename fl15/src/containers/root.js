import React, { Component } from "react";
import { Provider } from "react-redux";
import configureStore from "../configureStore";
//import Router from "./Router";
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter } from 'react-router-redux'

import { withRouter } from "react-router-dom";

import Nav from "./AppChapter";
const MyNav = withRouter(Nav);

const history = createHistory();
const store = configureStore(history);

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <MyNav />
        </ConnectedRouter>
      </Provider>
    );
  }
}
