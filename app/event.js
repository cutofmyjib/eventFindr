import React, {Component} from 'react';
var moment = require('moment');

export default class Event extends Component {
  render() {
    var start = moment(this.props.start.utc).format('MMM. D, YYYY h:mm a');
    var end = moment(this.props.end.utc).format('MMM. D, YYYY h:mm a');
    return (
      <a className="yellow card" href={this.props.url} target="_blank">
        <div className="ui middle aligned selection list">
          <div className="item">
          <img src={this.props.logo ? this.props.logo.url : 'style/defaultBG.png'} className="ui tiny image" />
          <div className="content">
            <div className="header">{this.props.name.text}</div>
            <div className="meta">{start} - {end}</div>
          </div>
        </div>
      </div>
      </a>
    );
  }
}