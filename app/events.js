import React, {Component} from 'react';
import reqwest from 'reqwest';
import {Loading, Success, Empty, Error} from './status.js';
import {base, auth} from './creds.js';
import moment from 'moment';

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

    var data = {
      'location.address': nextProps.city,
      'sort_by': 'date',
      'token': auth
    }
    if (nextProps.week === 'next_weekend') {
      const dateTime = 'YYYY-MM-DDTHH:mm:ss';
      const baseDate = moment().add(1, 'week').endOf('week');
      data['start_date.range_start'] = moment(baseDate).startOf('day').utc().format(dateTime);
      data['start_date.range_end'] = moment(baseDate).add(1, 'day').endOf('day').utc().format(dateTime);
    } else {
      data['start_date.keyword'] = nextProps.week;
    }

    reqwest({
      method: 'GET',
      url: base,
      data: data,
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