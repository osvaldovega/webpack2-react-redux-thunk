import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchingRoverData } from '../../actions';
import * as types from '../../common/labels';
import Photo from './Camara/Photo.jsx';

class Gallery extends Component {

  componentDidMount() {
    if (!this.props.Rover.dataFetched) {
      this.props.fetchingRoverData();
    }
  }

  render() {
    const Rover = this.props.Rover;
    let data;

    if (Rover.errorFetching.status) {
      data = (
        <div className={'Error_Message'}>
          {types.HOME_ERROR_MESSAGE_1} - {Rover.errorFetching.msg}
        </div>
      );
    } else if (Rover.dataFetched) {
      data = Rover.data.photos.map((e, i) => <Photo key={i} element={e} />);
    } else {
      data = (
        <p className={'Loading'}>
          {types.HOME_LOADING}
        </p>
      );
    }

    return (
      <section className={'Rover'}>
        {data}
      </section>
    );
  }
}

// ======================================= //
// PROP TYPES
// ======================================= //
Gallery.propTypes = {
  Rover: PropTypes.object.isRequired,
  fetchingRoverData: PropTypes.func
};

// ======================================= //
// REDUX STATE
// ======================================= //
function mapStateToProps(state) {
  const { Rover } = state;
  return { Rover };
}

// ======================================= //
// REDUX ACTIONS
// ======================================= //
function matchDispatchToProps(dispatch) {
  return bindActionCreators({ fetchingRoverData }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Gallery);
