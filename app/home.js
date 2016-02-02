import React, {Component} from 'react';
import Eventsearch from './eventsearch.js';
import Radiobuttons from './radiobuttons.js';
import Events from './events.js';

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {week: 'this_week'}
  }

  setCity(event) {
    if(event.keyCode == 13) {
      this.setState({city: event.target.value});
    }
  }

  setWeek(event) {
    this.setState({week: event.target.value})
  }

  render() {
    return (
      <div>
        <section className="search-header">
          <h1 className="appname">eventFindr</h1>
          <p>Find events near you!</p>
          <Eventsearch onKeyDown={this.setCity.bind(this)} />
          <Radiobuttons onChange={this.setWeek.bind(this)} checked={this.state.week} />
        </section>
        <section className="events-body">
          <Events city={this.state.city} week={this.state.week}/>
        </section>
      </div>
    );
  }
}