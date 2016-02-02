import React, {Component} from 'react';
import Event from './event.js';

export class Loading extends Component {
  render() {
    return <h1 className="events-status">Loading</h1>
  }
}

export class Empty extends Component {
  render() {
    return <h1 className="events-status">Sorry, there are no events this week.</h1>
  }
}

export class Error extends Component {
  render() {
    return <h1 className="events-status">Oops, something happened, please try again later.</h1>
  }
}

export class Success extends Component {
  render() {
    var list = this.props.events.map(function(data) {
      return <Event {...data} />
    })
    return (
      <div>
        <h1 className="events-status">Popular events in {this.props.city}</h1>
        <div className="ui stackable cards">
          {list}
        </div>
      </div>
    );
  }
}