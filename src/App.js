import { useState } from 'react';
import Buttons from './components/FeedbackOptions/';
import Section from './components/Section';
import Statistics from './components/Statistics/Statistics';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleChangeFeedback = value => {
    switch (value) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + bad + neutral;
  };

  const countpositiveFeedback = () => {
    const totalFeedback = countTotalFeedback();
    return totalFeedback
      ? Math.round((good * 100) / totalFeedback)
      : totalFeedback;
  };

  return (
    <div className="container">
      <Section title="Please leave feedback">
        <Buttons
          oneOfState={['good', 'neutral', 'bad']}
          onChange={handleChangeFeedback}
        />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positiveFeedback={countpositiveFeedback()}
        />
      </Section>
    </div>
  );
}
