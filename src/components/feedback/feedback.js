import React, { Component } from 'react';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = event => {
    const value = event.target.textContent.toLowerCase();
    this.setState(prevState => ({
      ...prevState,
      [value]: prevState[value] + 1,
    }));
  };

  render() {
    return (
      <div className="Feedback">
        <h3>Please leave feedback</h3>
        <div className="buttonsContainer">
          <button type="button" onClick={this.addFeedback}>
            Good
          </button>
          <button type="button" onClick={this.addFeedback}>
            Neutral
          </button>
          <button type="button" onClick={this.addFeedback}>
            Bad
          </button>
        </div>
        <div className="Statistics">
          <ul className="list">
            <li>
              Good
              <span>{this.state.good}</span>
            </li>
            <li>
              Neutral
              <span>{this.state.neutral}</span>
            </li>
            <li>
              Bad
              <span>{this.state.bad}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Feedback;
