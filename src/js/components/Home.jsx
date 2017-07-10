import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchApodData } from '../actions';
import PropTypes from 'prop-types';
import Apod from './Apod/Apod';
import * as types from '../common/labels';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

    if (!this.props.Apod.dataFetched) {
      this.props.fetchApodData();
    }
  }

  render() {
    const apod = this.props.Apod;
    let data = '';

    if (apod.errorFetching.status) {
      data = (<div className={'Error_Message'}>
          {types.HOME_ERROR_MESSAGE_1} - {apod.errorFetching.msg}
        </div>);
    } else if (apod.dataFetched) {
      data = (<Apod element={apod.data} />);
    } else {
      data = (<p className={'Loading'}>
          {types.HOME_LOADING}
        </p>);
    }

    return (
       <article className={'Home'}>
          {data}
       </article>
    );
  }
}

// ======================================= //
// PROP TYPES
// ======================================= //
Home.propTypes = {
  Apod: PropTypes.object.isRequired,
  fetchApodData: PropTypes.func.isRequired
};

// ======================================= //
// REDUX STATE
// ======================================= //
function mapStateToProps(state) {
  // Get APOD data from state
  const { Apod } = state;
  // Return the APOD ojbect to the class
  return { Apod };
}

// ======================================= //
// REDUX ACTIONS
// ======================================= //
function matchDispatchToProps(dispatch) {
  return bindActionCreators({ fetchApodData }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Home);
