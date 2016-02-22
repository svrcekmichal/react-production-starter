import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import Router from 'react-router/lib/Router';
import match from 'react-router/lib/match';
import browserHistory from 'react-router/lib/browserHistory';
import { Provider } from 'react-redux';
import { StyleSheet } from 'aphrodite';
import {resolveOnClient} from 'reasync';

// Your app's reducer and routes:
import createRoutes from './routes/root';
import { configureStore } from './store';

const initialState = window.INITIAL_STATE || {};

// Set up Redux (note: this API requires redux@>=3.1.0):
const store = configureStore(initialState);
const routes = createRoutes(store);
const container = document.getElementById('root');
StyleSheet.rehydrate(window.renderedClassNames);

store.subscribe(() => console.log(store.getState()));

resolveOnClient(browserHistory, routes, store);

// Render app with Redux and router context to container element:
render((
  <Provider store={store}>
      <Router history={browserHistory} routes={routes} />
  </Provider>
), container);
