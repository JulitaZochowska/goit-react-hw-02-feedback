import React, { Component } from 'react';

class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <div>
        {options.map(option => (
          <button onClick={() => onLeaveFeedback(option)}>{option}</button>
        ))}
      </div>
    );
  }
}

export default FeedbackOptions;
