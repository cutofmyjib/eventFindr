import React, {Component} from 'react';
import {render} from 'react-dom';
import {Link} from 'react-router';

export default class Event extends Component {
  render() {
    return (
      <a className="yellow card" href={this.props.url} target="_blank">
        <div className="ui middle aligned selection list">
          <div className="item">
          <img src={this.props.logo ? this.props.logo.url : 'style/defaultBG.png'} className="ui tiny image" />
          <div className="content">
            <div className="header">{this.props.name.text}</div>
          </div>
        </div>
      </div>
      </a>
    );
  }
}