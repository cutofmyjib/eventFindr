import React, {Component} from 'react';
import {render} from 'react-dom';

export default class Eventsearch extends Component {
  searchEvents(event) {
    if(event.keyCode == 13) {
      console.log("hi");
    }
  }

  render() {
    return (
      <div>
        <div className="ui category search">
          <div className="ui icon input">
            <input className="prompt" type="text" onKeyDown={this.searchEvents} placeholder="San Francisco, CA" />
            <i className="search icon"></i>
          </div>
          <div className="results"></div>
        </div>
      </div>
    );
  }
}