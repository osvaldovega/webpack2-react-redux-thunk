import React, { Component } from 'react';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import ReduxToastr from 'react-redux-toastr';
import routes from '../routes';

export default class Root extends Component {

  constructor(props) {
    super(props);
  }

  render() {
      const { store, history } = this.props;

      return (
        <Provider history={history} store={store}>
          <div>
              <Router history={history} routes={routes} />
              <ReduxToastr
                timeOut={3000}
                newestOnTop={false}
                preventDuplicates={true}
                position='top-left'
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
