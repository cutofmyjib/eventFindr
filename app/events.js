import React, {Component} from 'react';
import {render} from 'react-dom';
import reqwest from 'reqwest';
import Event from './event.js';
import {auth} from './creds.js';
import {Link} from 'react-router';

export default class Events extends Component {
  constructor(props) {
    super(props)
    this.state = {eventsQuery : []}
  }

  componentDidMount() {
    reqwest({
      url: 'https://www.eventbriteapi.com/v3/events/search/?location.longitude=-97.7500&location.latitude=30.2500&location.within=15mi&token='+auth,
      //CORS not jsonp
      crossOrigin: true,
      type: 'json'
    })
    .then((function(response){
      this.setState({eventsQuery: response.events});
    }).bind(this))

    .catch(function(response){
      console.log('fail');
      console.log(response)
    })
  }

  render() {
    var list = this.state.eventsQuery.map(function(data) {
      return <Event {...data} />
    })
    return (
      <div className="ui stackable cards">
        {list}
      </div>
    );
  }

}