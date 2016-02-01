import React, {Component} from 'react';
import {render} from 'react-dom';

export default class Radiobuttons extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillReceiveProps(nextProps) {
    this.setState({week: nextProps.week})
  }

  render() {
    return (
      <div className="radio-form">
        <input type="radio" value="this_week" checked={this.props.checked == 'this_week'} onChange={this.props.onChange} />
        <label>This Week</label>
        <input type="radio" value="next_week" checked={this.props.checked == 'next_week'} onChange={this.props.onChange} />
        <label>Next Week</label>
      </div>
    );
  }
}