import React, {Component} from 'react';
import {render} from 'react-dom';
import {connect} from 'react-refetch';
import Eventsearch from './eventsearch.js';
import Events from './events.js';

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  setLoc(event) {
    if(event.keyCode == 13) {
      this.setState({ queryString: event.target.value });
    }
  }

  render() {
    return (
      <div>
        <section className="search-header">
          <h1 className="appname">eventFindr</h1>
          <p>Find events near you!</p>
          <Eventsearch onKeyDown={this.setLoc.bind(this)} />
        </section>
        <Events />
      </div>
    );
  }
}