import React, {Component} from 'react';
import {render} from 'react-dom';
import Eventsearch from './eventsearch.js'

export default class Home extends Component {
  render() {
    return (
      <section className="landing">
        <h1 className="appname">eventFindr</h1>
        <p>Find events near you!</p>
        <Eventsearch />
      </section>
    );
  }
}