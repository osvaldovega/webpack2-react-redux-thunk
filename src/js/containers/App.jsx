'use stric';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toastr } from 'react-redux-toastr';
import PropTypes from 'prop-types';
import Header from '../components/Header/Header';
import NavMenu from '../components/Header/Menu/NavMenu';
import * as types from '../common/labels';
import '../../public/stylesheets/sass/index.scss';
import 'react-redux-toastr/src/styles/index.scss';

export default class App extends Component {

  render() {
    return (
      <section id='universe'>
        <Header appName='Universe'>
          <NavMenu />
        </Header>
        {this.props.children}
      </section>
    );
  }
}

// ======================================= //
// PROP TYPES
// ======================================= //
App.propTypes = {
  children: PropTypes.object.isRequired
}
