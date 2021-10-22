import React from 'react';
import Buttons from './components/FeedbackOptions/';
import Section from './components/Section';
import Statistics from './components/Statistics/Statistics';

export default class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleChangeFeedback = value => {
    this.setState({ [value]: this.state[value] + 1 });
  };

  countTotalFeedback = () => {
    const oneOfState = Object.keys(this.state);
    return oneOfState.reduce((total, key) => total + this.state[key], 0);
  };

  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback();
    return totalFeedback
      ? Math.round((this.state.good * 100) / totalFeedback)
      : totalFeedback;
  };

  render() {
    const { good, bad, neutral } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const options = Object.keys(this.state);
    const positiveFeedback = this.countPositiveFeedbackPercentage();

    return (
      <div className="container">
        <Section title="Please leave feedback">
          <Buttons oneOfState={options} onChange={this.handleChangeFeedback} />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positiveFeedback={positiveFeedback}
          />
        </Section>
      </div>
    );
  }
}
