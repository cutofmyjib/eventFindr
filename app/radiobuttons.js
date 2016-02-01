import React, {Component} from 'react';
import {render} from 'react-dom';

export default class Radiobuttons extends Component {
  constructor(props) {
    super(props)
    this.state = {week: 'this_week'}
  }

  // componentWillReceiveProps(nextProps) {
  //   this.setState({selectedWeek: nextProps.selectedWeek})
  // }

  thisWeek(event) {
    this.setState({week: event.target.value})
  }
  nextWeek(event) {
    this.setState({week: event.target.value})
  }

  render() {
    return (
      <div className="radio-form">
        <input type="radio" value="this_week" checked={this.state.week === 'this_week'} onChange={this.thisWeek.bind(this)} />
        <label>This Week</label>
        <input type="radio" value="next_week" checked={this.state.week === 'next_week'} onChange={this.nextWeek.bind(this)} />
        <label>Next Week</label>
      </div>
    );
  }
}