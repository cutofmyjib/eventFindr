import React, {Component} from 'react';
import reqwest from 'reqwest';
import {Loading, Success, Empty, Error} from './status.js';
import {base, auth} from './creds.js';

export default class Events extends Component {
  constructor(props) {
    super(props)
    this.state = {eventsQuery : []}
  }

  componentWillReceiveProps(nextProps) {
    if (!(nextProps.city && nextProps.week)) {
      return
    }
    this.setState({status: 'loading'})
    reqwest({
      method: 'GET',
      url: base,
      data: {
        'venue.city': nextProps.city,
        'sort_by': 'date',
        'start_date.keyword': nextProps.week,
        'token': auth
      },
      type: 'json',
      //CORS not jsonp
      crossOrigin: true
    })

    .then((function(response){
      this.setState({eventsQuery: response.events, status: 'success'});
    }).bind(this))

    .catch((function(response){
      this.setState({status: 'fail'})
    }).bind(this))
  }

  render() {
    switch (this.state.status) {
      case 'success':
        return (this.state.eventsQuery.length > 0)
          ? <Success events={this.state.eventsQuery} city={this.props.city} />
          : <Empty />
      case 'loading':
        return <Loading />
      case 'fail':
        return <Error />
      default:
        return <div></div>
    }
  }
}