import React, {Component} from 'react';
import {render} from 'react-dom';
import {connect} from 'react-refetch';
import Event from './event.js';

class Events extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    // const eventsFetch = this.props.eventsFetch;
    const { eventsFetch } = this.props;

    if (eventsFetch.pending) {
      return (<div>pending</div>);
    } else if (eventsFetch.rejected) {
      return (<div>{eventsFetch.reason}</div>);
    } else if (eventsFetch.fulfilled) {
      console.log(eventsFetch.value);
      var list = [];
      list = eventsFetch.value.events.map(function(data){
        return <Event {...data} />
      })
      return (
        <div className="ui three stackable cards">
          {list}
        </div>
      );
    }
  }
}

export default connect(props => ({
  eventsFetch: {url: 'https://www.eventbriteapi.com/v3/events/search/?start_date.keyword=today&sort_by=best&location.longitude=-122.431297&location.latitude=37.773972&location.within=15mi&token=NF3BEOVMMHEKBWNZFNRE'}
}))(Events)