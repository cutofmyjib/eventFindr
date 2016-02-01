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

    if (nextProps.queryCity && nextProps.week) {
      this.setState({status: 'loading'})
      reqwest({
        url: base+'venue.city='+nextProps.queryCity+'&sort_by=date&start_date.keyword='+nextProps.week+'&token='+auth,
        //CORS not jsonp
        crossOrigin: true,
        type: 'json'
      })
      .then((function(response){
        this.setState({eventsQuery: response.events, status: 'success'});
      }).bind(this))

      .catch((function(response){
        this.setState({status: 'fail'})
      }).bind(this))
    }
  }

  render() {
    var message = '';
    var list = this.state.eventsQuery.map(function(data) {
      return <Event {...data} />
    })
    if (this.state.status === 'success') {
      if (list.length > 0) {
        message = 'Popular events in ' + this.props.queryCity;
      } else {
        message = 'Sorry, there are no events this week.'
      }
    } else {
      message = this.state.status;
    }
    return (
      <div>
        <h1 className="events-status">{message}</h1>
        <div className="ui stackable cards">
          {list}
        </div>
      </div>
    );
  }

}