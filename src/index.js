import request from 'axios';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {
  Router,
  browserHistory,
} from 'react-router';
import configureStore from './store/store';
import routes from './routes';
import './index.css';

const store = configureStore();
request.defaults.withCredentials = false;

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      {routes}
    </Router>
  </Provider>, document.getElementById('root'),
);
