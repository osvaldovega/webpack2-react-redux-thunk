import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import PropTypes from 'prop-types';
import Perf from 'react-addons-perf';
import ReduxToastr from 'react-redux-toastr';
import routes from '../routes';

export default class Root extends Component {

  constructor(props) {
    super(props);

    window.Perf = Perf;
  }

  render() {
      const { store, history } = this.props;

      return (
        <Provider store={store}>
          <div>
              <Router history={history} routes={routes} />
              <ReduxToastr
                timeOut={3000}
                newestOnTop={false}
                preventDuplicates={true}
                position='top-right'
                transitionIn='fadeIn'
                transitionOut='fadeOut'
                progressBar />
          </div>
        </Provider>
      );
  }
};

// ======================================= //
// PROP TYPES
// ======================================= //
Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}
