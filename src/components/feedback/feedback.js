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
      // ...prevState,
      [value]: prevState[value] + 1,
    }));
    // this.countTotalFeedback();
  };

  countTotalFeedback() {
    // console.log(Object.values(this.state))
    // console.log(Object.values(this.state).reduce((acc, val) => { return acc + val; }, 0))
    return Object.values(this.state).reduce((acc, val) => {
      return acc + val;
    }, 0);
  }

  countPositiveFeedbackPercentage() {
    console.log(this.state.good);
    console.log(this.state.bad);
    console.log(this.state.good + this.state.bad);
    const goodAndBad = this.state.good + this.state.bad;
    return Math.round((100 * this.state.good) / goodAndBad);
  }

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
            <li className="item">
              Good:
              <span>{this.state.good}</span>
            </li>
            <li className="item">
              Neutral:
              <span>{this.state.neutral}</span>
            </li>
            <li className="item">
              Bad:
              <span>{this.state.bad}</span>
            </li>
            <li className="item">
              Total:
              <span>{this.countTotalFeedback()}</span>
            </li>
            <li className="item">
              Positive feedback:
              <span>{this.countPositiveFeedbackPercentage()}%</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Feedback;
