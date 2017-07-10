import React, { Component } from 'react';
import { toastr } from 'react-redux-toastr';

export default class About extends Component {

  componentWillMount() {
    toastr.success('About', 'Component WILL be mount');
    console.log('componentWillMount');
  }

  componentDidMount() {
    toastr.success('About', 'Component DID mount');
    console.log('componentDidMount');
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps', nextProps);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextState);
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    toastr.success('About', 'Component WILL unmount');
    console.log('componentWillUnmount');
  }

  render() {
    return (
      <article className={'About'}>
        <h1>About</h1>
        <p>This is the about page</p>
      </article>
    );
  }
}
