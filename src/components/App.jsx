import React,{Component} from "react";
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notofication/Notification';

export class App extends Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

userLeaveFeedback = (evt) => {
        const btnName = evt.target.name;
        this.setState(prevState => ({ [btnName]: prevState[btnName] + 1 }));
}    
countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
		return  good + neutral + bad;
	}  
countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
	return Math.round(good *100/total);
    }    
    render() {
        const total = this.countTotalFeedback();
        const positivePercentage = this.countPositiveFeedbackPercentage();
        const { good, neutral, bad } = this.state;
    return (
      <div
         style={{
         height: '100vh',
         textAlign: 'center',
         fontSize: 40,
         color: '#010101'
       }}>
        
          <Section title="Please leave feedback">
                <FeedbackOptions
                    options={Object.keys(this.state)} 
                    onLeaveFeedback={this.userLeaveFeedback }   
            />
          </Section>
            {total === 0 ?
                    (<Notification message="There is no feedback" />
                    ):(<Section title="Statistics">
                       <Statistics
                          good={good}
					      neutral={neutral}
					      bad={bad}
					      total={total}
                          positivePercentage={positivePercentage} />
          </Section>)}
        </div>
    );
    }
}
