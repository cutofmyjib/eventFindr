import React, {Component} from 'react';
import {render} from 'react-dom';
import Events from './events.js'

export default class Eventsearch extends Component {
  render() {
    return (
      <div className="ui category search">
        <div className="ui icon input">
          <input className="prompt" type="text" onKeyDown={this.props.onKeyDown} placeholder="San Francisco, CA" />
          <i className="search icon"></i>
        </div>
      </div>
    );
  }
}