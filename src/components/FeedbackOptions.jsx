import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

class FeedbackOptions extends Component {
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <div className={css.buttonContainer}>
        {options.map(option => (
          <button
            className={css.button}
            onClick={() => onLeaveFeedback(option)}
          >
            {this.capitalizeFirstLetter(option)}
          </button>
        ))}
      </div>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};
export default FeedbackOptions;
