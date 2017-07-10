import React, { Component } from 'react';
import { Link } from 'react-router';
import routes from '../common/routes';
import { toastr } from 'react-redux-toastr';

export default class PageNotFound extends Component {

  componentDidMount() {
    toastr.success('404', 'Page not found');
  }

  render() {
    return (
      <section className={'PageNotFound'}>
        <h1>Oops...</h1>
        <p>Could be an error with the application or you wrote a wrong address!!!</p>
        <Link to={routes.root}>Back To Home</Link>
      </section>
    );
  }
}
