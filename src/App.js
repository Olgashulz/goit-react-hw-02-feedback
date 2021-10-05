import React, { Component } from 'react';
import Section from './components/Section';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  /// вариант если из feedbackOptions приходит ивент, но правильнее и проще если сразу приходит название кнопки
  // addFeedback = event => {
  //   const value = event.target.textContent.toLowerCase();
  //   this.setState(prevState => ({
  //     [value]: prevState[value] + 1,
  //   }));
  // };
  /////////////////////////////////

  addFeedback = value => {
    this.setState(prevState => ({
      [value]: prevState[value] + 1,
    }));
  };

  countTotalFeedback() {
    return Object.values(this.state).reduce((acc, val) => {
      return acc + val;
    }, 0);
  }

  countPositiveFeedbackPercentage() {
    const goodAndBad = this.state.good + this.state.bad;
    return Math.round((100 * this.state.good) / goodAndBad);
    // return ((this.state.good / this.countTotalFeedback()) * 100) - Если учитывать нейтральные отзывы.
  }

  render() {
    const { good, bad, neutral } = this.state;

    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.addFeedback}
        />

        {this.countTotalFeedback() > 0 && (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    );
  }
}

export default App;
