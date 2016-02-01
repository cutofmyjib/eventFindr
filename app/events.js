import React, {Component} from 'react';
import {render} from 'react-dom';
import reqwest from 'reqwest';
import Event from './event.js';
import {base, auth} from './creds.js';
import {Link} from 'react-router';

export default class Events extends Component {
  constructor(props) {
    super(props)
    this.state = {eventsQuery : []}
  }

  componentWillReceiveProps(nextProps) {
    reqwest({
      url: base+'venue.city='+nextProps.queryCity+'&token='+auth,
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