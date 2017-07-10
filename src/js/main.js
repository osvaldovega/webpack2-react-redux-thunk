import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import configureStore from './store/configureStore';
import Root from './containers/Root';
import 'babel-polyfill';

// Capture events from Material-UI
injectTapEventPlugin();

// Get Store Configuration
const store = configureStore();

// Sync the sotre with the routing (browserHistory)
const history = syncHistoryWithStore(browserHistory, store);

// Get the root element from HTML where code will be insert it
const rootElement = document.getElementById('app');
const rootNode = (<Root store={store} history={history} />);

// Render the Application
render (
  rootNode,
  rootElement
);
