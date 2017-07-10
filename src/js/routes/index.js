import React from 'react';
import { Route, Redirect, IndexRoute } from 'react-router';
// Import Containers
import App from '../containers/App';
// Import Components
import Home from '../components/Home';
import Gallery from '../components/Gallery/Gallery';
import About from '../components/About/About';
import PageNotFound from '../components/PageNotFound';
// Import Routes
import routes from '../common/routes';

export default (
  <Route path={routes.root} component={App}>
    <IndexRoute component={Home} />
    <Route path={routes.root + routes.gallery} component={Gallery} />
    <Route path={routes.root + routes.about} component={About} />
    <Route path={routes.root + routes.pageNotFound} component={PageNotFound} />
    <Redirect from='*' to={routes.root + routes.pageNotFound} />
  </Route>
);
