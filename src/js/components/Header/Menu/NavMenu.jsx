import React, { Component } from 'react';
import { Link } from 'react-router';
import * as types from '../../../common/labels';

export default class NavMenu extends Component {
  constructor(props) {
    super(props);

    this.menuLinks = this.menuLinks.bind(this);
  }

  menuLinks() {

    if (Array.isArray(types.MENU_LINKS)) {
      return types.MENU_LINKS.map((e, i) =>
        <Link key={i} to={e.path}>{e.title}</Link>
      );
    }
    return '';
  }

  render() {
    return (
      <section className={'Menu'}>
        {this.menuLinks()}
      </section>
    );
  }
}
