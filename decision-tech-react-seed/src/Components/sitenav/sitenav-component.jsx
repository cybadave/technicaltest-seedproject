import React from 'react';
import './sitenav-component.scss';
import {BurgerMenu} from '../burgermenu/burgermenu-component'
export class SiteNav extends React.Component {
  render() {
    return (<nav><div id="logo"></div><BurgerMenu></BurgerMenu></nav>);
  }
}