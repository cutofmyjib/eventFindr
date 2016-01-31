import React, {Component} from 'react';
import {render} from 'react-dom';

export default class Event extends Component {
  render() {
    return (
      <div className="ui card">
        <div className="content">
          <div className="header">{this.props.name.text}</div>
        </div>
      </div>
    );
  }
}