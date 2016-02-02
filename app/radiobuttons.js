import React, {Component} from 'react';

export default class Radiobuttons extends Component {
  render() {
    return (
      <div className="radio-form">
        <input type="radio" value="this_week" checked={this.props.checked === 'this_week'} onChange={this.props.onChange} />
        <label>This Week</label>
        <input type="radio" value="this_weekend" checked={this.props.checked === 'this_weekend'} onChange={this.props.onChange} />
        <label>Next Weekend</label>
      </div>
    );
  }
}